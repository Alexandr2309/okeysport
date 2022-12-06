import { IAuthUserByEmailProps } from '../model/services/authByEmail';
import { ValidateAuthErrors } from 'features/authByEmail';
import { EMAIL_REGEXP } from "shared/const/reg-exp";

export const validateAuthData = (authData?: IAuthUserByEmailProps) => {
  if (!authData || !Object.values(authData).find((item) => item.length > 0)) {
    return [ValidateAuthErrors.NO_DATA];
  }
  const errors: ValidateAuthErrors[] = [];

  if (!EMAIL_REGEXP.test(authData.email)) {
    errors.push(ValidateAuthErrors.INCORRECT_EMAIL);
  }
  if (!authData.password || authData.password.length < 6) {
    errors.push(ValidateAuthErrors.INCORRECT_PASSWORD);
  }

  return errors;
};
