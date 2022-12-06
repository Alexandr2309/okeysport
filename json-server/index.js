const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// register endpoint
server.post('/register', (req, res) => {
  try {
    const { email, username } = req.body;
    console.log(req.body);
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.email === email || user.username === username
    );

    if (userFromBd) {
      return res.status(403).json({ message: 'User is has' });
    }
    const lastId = +users[users.length - 1].id;

    db.users.push({ id: (lastId + 1).toString(), ...req.body });

    fs.writeFileSync(
      path.resolve(__dirname, 'db.json'),
      JSON.stringify(db),
      'UTF-8'
    );

    return res.status(200).json({ message: 'User successfully add' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization && !req.url.includes('articles')) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
