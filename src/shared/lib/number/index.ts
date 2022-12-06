import { ChangeEvent, RefObject } from 'react';
import { PHONE_REGEXP } from "shared/const/reg-exp";

const onBlurCheckFormat = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target?.value || '';
  const phoneNumber =
    value?.length > 1
      ? `+7${value.slice(2).replace(/\D/g, '')}`
      : `+7${value?.replace(/\D/g, '')}`;

  if (!PHONE_REGEXP.test(phoneNumber)) {
    return false;
  }

  return true;
};

// helper для сохранения позиции курсора
function saveCursorPos(
  tel: RefObject<HTMLInputElement>,
  phoneNumberLength: number
) {
  console.log(tel);
  if (phoneNumberLength >= 2 && phoneNumberLength < 5) {
    setTimeout(() => {
      tel.current!.selectionEnd = phoneNumberLength + 3;
    }, 0);
  } else if (phoneNumberLength > 5) {
    const selectNow = tel.current!.selectionStart;
    setTimeout(() => {
      tel.current!.selectionEnd = selectNow;
    }, 0);
  } else if (phoneNumberLength === 5) {
    setTimeout(() => {
      tel.current!.selectionEnd = 10;
    }, 0);
  }
}

// Маска для инпута, форматирование номера телефона
export function formatPhoneNumber(
  tel: RefObject<HTMLInputElement>,
  value: string
) {
  const phoneNumber =
    value.length > 1
      ? `7${value.slice(2).replace(/\D/g, '')}`
      : `7${value.replace(/\D/g, '')}`;
  const phoneNumberLength = phoneNumber.length;

  if (!phoneNumber.slice(1)) {
    tel.current!.selectionEnd = 0;
    return '';
  }

  saveCursorPos(tel, phoneNumberLength);

  if (phoneNumberLength < 5) {
    const currentNums = phoneNumber.slice(1, 4);
    return `+${phoneNumber.slice(0, 1)} (${currentNums}${'_'.repeat(
      3 - currentNums.length
    )}) _______`;
  }
  const lastNums = phoneNumber.slice(4, 11);
  return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(
    1,
    4
  )}) ${lastNums}${'_'.repeat(7 - lastNums.length)}`;
}
