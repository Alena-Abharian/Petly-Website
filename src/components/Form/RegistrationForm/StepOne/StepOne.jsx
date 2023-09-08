import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { Form } from '../RegistrationForm.styled';
import {
  InputsWrp,
  Input,
  AuthBtn,
  InputWrapper,
  TextError,
  EyeBtn,
  IconEye,
  IconEyeSlash,
} from 'components/Form/LoginForm/LoginForm.styled';

const StepOne = ({ next, data }) => {
  const passwordRexExp = /^[a-zA-Zа-яА-Я0-9]+$/;
  const emailRegExp =
    /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const changeVisiblePassword = () => {
    setShowPassword(prev => !prev);
  };
  const changeVisibleConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const stepOneValidationSchema = yup.object().shape({
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
      .required()
      .label('Password'),
    confirmPassword: yup
      .string()
      .required()
      .test(
        'checkEqualityPasswords',
        'Both password need to be the same',
        function (value) {
          if (this?.options?.parent?.password !== value) {
            return false;
          }
          return true;
        }
      )
      .label('Confirm password'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: stepOneValidationSchema,

    onSubmit: values => {
      next(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputsWrp>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <TextError>{formik.errors.email}</TextError>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? 'password' : 'text'}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <TextError>{formik.errors.password}</TextError>
          )}

          <EyeBtn type="button" onClick={changeVisiblePassword}>
            {showPassword ? (
              <IconEye size="26px" />
            ) : (
              <IconEyeSlash size="26px" />
            )}
          </EyeBtn>
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showConfirmPassword ? 'password' : 'text'}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            placeholder="Confirm Password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <TextError>{formik.errors.confirmPassword}</TextError>
          )}

          <EyeBtn type="button" onClick={changeVisibleConfirmPassword}>
            {showConfirmPassword ? (
              <IconEye size="26px" />
            ) : (
              <IconEyeSlash size="26px" />
            )}
          </EyeBtn>
        </InputWrapper>
      </InputsWrp>
      <AuthBtn type="submit">Next</AuthBtn>
    </Form>
  );
};

export default StepOne;
