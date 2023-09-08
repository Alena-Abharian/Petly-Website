import * as yup from 'yup';

export const passwordRexExp = /^[a-zA-Zа-яА-Я0-9]+$/;
export const emailRegExp =
  /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .min(10)
    .max(63)
    .matches(emailRegExp, 'Email is not valid')
    .label('Email'),

  password: yup
    .string()
    .min(7)
    .max(32)
    .matches(passwordRexExp, 'Password is not valid')
    // .required()
    .label('Password'),
});

export const initialValues = {
  email: '',
  password: '',
};
