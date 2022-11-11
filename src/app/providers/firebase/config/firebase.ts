import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCMygunLjjoRnzlvc5B_NEaQcBpkiDRFTc',
  authDomain: 'coursework-e0d6d.firebaseapp.com',
  projectId: 'coursework-e0d6d',
  storageBucket: 'coursework-e0d6d.appspot.com',
  messagingSenderId: '752375284573',
  appId: '1:752375284573:web:b22e8c584d4ad0b92a9eb4',
  measurementId: 'G-WT93SCC3S7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
