import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';

import { useNavigate } from 'react-router-dom';
import { login, restore } from 'redux/auth/authOperations';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { validationSchema, initialValues } from './ValidationSchema';
import { AuthBtn } from './LoginForm.styled';
import {
  FormWrapper,
  Form,
  Title,
  InputsWrp,
  InputWrapper,
  TextError,
  Input,
  EyeBtn,
  IconEye,
  IconEyeSlash,
  StyledBtnGoogle,
  FlexLink,
} from './LoginForm.styled';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import Links from './links/Links';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];
const restoring = [{ type: 'email', name: 'email', label: 'Email' }];

const LoginForm = memo(({ onRestore, showRestore }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

  const [showPassword, setShowPassword] = useState(true);

  const changeVisiblePassword = () => {
    setShowPassword(prev => !prev);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async values => {
      if (!isAuth && showRestore) {
        dispatch(restore({ email: values.email }));
      }

      if (!isAuth && !showRestore) {
        dispatch(login(values)).then(({ error }) => {
          !error && navigate('/user');
        });
      }
    },
  });

  return (
    <FormWrapper
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Form onSubmit={formik.handleSubmit}>
        {showRestore ? <Title>Restore password</Title> : <Title>Login</Title>}
        <InputsWrp>
          {showRestore
            ? restoring.map(({ type, name, label }) => (
                <InputWrapper key={name}>
                  <Input
                    type={type}
                    name={name}
                    placeholder={label}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                  />
                  {formik.touched[name] && formik.errors[name] && (
                    <TextError>{formik.errors[name]}</TextError>
                  )}
                </InputWrapper>
              ))
            : inputs.map(({ type, name, label }) => (
                <InputWrapper key={name}>
                  <Input
                    type={type === 'password' && showPassword ? type : 'text'}
                    name={name}
                    placeholder={label}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                  />
                  {formik.touched[name] && formik.errors[name] && (
                    <TextError>{formik.errors[name]}</TextError>
                  )}
                  {type === 'password' && (
                    <EyeBtn type="button" onClick={changeVisiblePassword}>
                      {showPassword ? (
                        <IconEye size="26px" />
                      ) : (
                        <IconEyeSlash size="26px" />
                      )}
                    </EyeBtn>
                  )}
                </InputWrapper>
              ))}
        </InputsWrp>
        <AuthBtn type="submit">
          {showRestore ? 'Send to email' : 'Login'}
        </AuthBtn>
        <StyledBtnGoogle type="button">
          <FlexLink href="https://petly-back.onrender.com/api/auth/google">
            <FcGoogle size="35px" /> Continue with Google
          </FlexLink>
        </StyledBtnGoogle>
        <Links onRestore={onRestore} showRestore={showRestore} />
      </Form>
    </FormWrapper>
  );
});

export default LoginForm;
