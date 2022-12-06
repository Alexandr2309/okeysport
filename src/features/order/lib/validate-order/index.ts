import { ValidateOrderErrors } from 'entities/order';
import { ISendOrderArgs } from '../../model/services/sendOrder';
import { EMAIL_REGEXP, PHONE_REGEXP } from 'shared/const/reg-exp';

export const validateOrderData = (orderData?: ISendOrderArgs) => {
  if (
    !orderData ||
    !Object.values(orderData)
      .slice(0, -1)
      .find((item) => item.toString().length > 0)
  ) {
    return [ValidateOrderErrors.NO_DATA];
  }

  const errors: ValidateOrderErrors[] = [];

  const { email, phone, name, type } = orderData;

  if (!/^[а-яА-Я][а-яА-Я]+$/g.test(name)) {
    errors.push(ValidateOrderErrors.INCORRECT_USERNAME);
  }

  if (!EMAIL_REGEXP.test(email)) {
    errors.push(ValidateOrderErrors.INCORRECT_EMAIL);
  }

  if (!PHONE_REGEXP.test('+' + phone.replace(/\D/g, ''))) {
    errors.push(ValidateOrderErrors.INCORRECT_PHONE);
  }

  if (!type) {
    errors.push(ValidateOrderErrors.INCORRECT_TYPE);
  }

  return errors;
};
