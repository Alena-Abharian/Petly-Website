import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form } from '../RegistrationForm.styled';
import { BackBtn } from '../RegistrationForm.styled';
import {
  InputsWrp,
  Input,
  AuthBtn,
  InputWrapper,
  TextError,
} from 'components/Form/LoginForm/LoginForm.styled';

const inputs = [
  { type: 'text', name: 'name', label: 'Name' },
  { type: 'text', name: 'city', label: 'City, region' },
  { type: 'text', name: 'phone', label: 'Mobile phone' },
];

const StepTwo = ({ next, data, prev }) => {
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{9}$/;

  const stepTwoValidationSchema = yup.object().shape({
    name: yup.string().required(),
    city: yup
      .string()
      .required()
      .matches(cityRegex, 'Error. Example: Brovary, Kyiv'),
    phone: yup
      .string()
      .required()
      .max(13)
      .matches(phoneRegex, 'Phone is not valid. Example: +380XXXXXXXXX'),
  });
  const formik = useFormik({
    initialValues: data,
    validationSchema: stepTwoValidationSchema,

    onSubmit: values => {
      const registerValues = { ...values };
      delete registerValues.confirmPassword;
      next(registerValues, true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputsWrp>
        {inputs.map(({ type, name, label }) => (
          <InputWrapper key={name}>
            <Input
              type={type}
              name={name}
              label={label}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
              variant="outlined"
              placeholder={label}
            />
            {formik.touched[name] && formik.errors[name] && (
              <TextError>{formik.errors[name]}</TextError>
            )}
          </InputWrapper>
        ))}
      </InputsWrp>
      <InputsWrp>
        <AuthBtn type="submit">Register</AuthBtn>
        <BackBtn type="button" onClick={() => prev(formik.values)}>
          Back
        </BackBtn>
      </InputsWrp>
    </Form>
  );
};

export default StepTwo;
