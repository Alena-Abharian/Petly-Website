import LoginForm from 'components/Form/LoginForm';
import Container from '../../components/Common/Container/Container';
import { Wrapper } from './LoginPage.styled';
import { RegistBg } from 'page/loginPage/LoginPage.styled';

function LoginPage() {
  return (
    <RegistBg>
      <Container>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Container>
    </RegistBg>
  );
}

export default LoginPage;
