import { useState } from 'react';
import LoginForm from 'components/Form/LoginForm';
import Container from '../../components/Common/Container/Container';
import { RegistBg, Wrapper } from '../../page/loginPage/LoginPage.styled';

function RestorePage() {
  const [showRestore, setShowRestore] = useState(true);

  const onRestore = () => {
    setShowRestore(prev => !prev);
  };

  return (
    <RegistBg>
      <Container>
        <Wrapper>
          <LoginForm onRestore={onRestore} showRestore={showRestore} />
        </Wrapper>
      </Container>
    </RegistBg>
  );
}

export default RestorePage;
