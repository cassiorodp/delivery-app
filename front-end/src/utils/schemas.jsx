import * as yup from 'yup';

const MIN_NAME_NUMBER = 12;
const MIN_PASSWORD_NUMBER = 6;

export const registerSchema = yup.object({
  name: yup.string().min(MIN_NAME_NUMBER).required(),
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASSWORD_NUMBER).required(),
});

export const checkoutSchema = yup.object({
  address: yup.string().required(),
  number: yup.string().required(),
});

export const loginSchema = yup.object({
  login: yup.string().email().required(),
  password: yup.string().min(MIN_PASSWORD_NUMBER).required(),
});
