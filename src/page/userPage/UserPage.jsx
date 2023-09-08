import UserData from '../../components/User/UserData';
import Logout from '../../components/User/Logout';
import PetsData from '../../components/User/PetsData';
import Section from 'components/Common/Section';

import { DivWrapperMain, DivUserInfo, DivWrap, Title, Div, DivLogout } from './UserPage.styled';

function UserPage() {
  return (
    <>
    <Section>
      <DivWrapperMain>
        <DivWrap>
          <Title>My information:</Title>
          <DivUserInfo>
            <UserData />
            <DivLogout>
              <Logout />
            </DivLogout>
          </DivUserInfo>
        </DivWrap>
        <Div>
          <PetsData />
        </Div>
      </DivWrapperMain>
      </Section>
    </>

  );
}

export default UserPage;
