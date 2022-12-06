import { IRegisterUserByEmailProps } from '../../model/services/registerUserByEmail/registerUserByEmail';
import { ValidateRegisterError } from '../../model/types/registerSchema';
import { EMAIL_REGEXP } from "shared/const/reg-exp";


export const validateRegisterData = (regData?: IRegisterUserByEmailProps) => {
  if (
    !regData ||
    !Object.values(regData).find((item) => item.toString().length > 0)
  ) {
    return [ValidateRegisterError.NO_DATA];
  }

  const errors: ValidateRegisterError[] = [];

  const { username, email, password, verifiedPassword } = regData;

  if (!password) {
    errors.push(ValidateRegisterError.INCORRECT_PASSWORD);
  }
  if (password !== verifiedPassword) {
    errors.push(ValidateRegisterError.PASSWORD_DON_MATCH);
  }
  if (!/^[a-zA-Z][a-zA-Z0-9-]+$/g.test(username)) {
    errors.push(ValidateRegisterError.INCORRECT_USERNAME);
  }
  if (!EMAIL_REGEXP.test(email)) {
    errors.push(ValidateRegisterError.INCORRECT_EMAIL);
  }

  return errors;
};
