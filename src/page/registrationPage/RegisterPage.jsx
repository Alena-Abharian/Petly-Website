import Container from '../../components/Common/Container/Container';
import RegistrationForm from 'components/Form/RegistrationForm';
import { Wrapper } from 'page/loginPage/LoginPage.styled';
import { RegistBg } from 'page/loginPage/LoginPage.styled';

function RegisterPage() {
  return (
    <>
      <RegistBg>
        <Container>
          <Wrapper>
            <RegistrationForm />
          </Wrapper>
        </Container>
      </RegistBg>
    </>
  );
}

export default RegisterPage;
