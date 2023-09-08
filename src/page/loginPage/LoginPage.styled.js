import styled from 'styled-components';
import Container from 'components/Common/Container';

import bg_desk from '../../assets/registlog/desk/bg-desk.png';
import bg_tab from '../../assets/registlog/tab/bg-tab.png';
import bg_mob from '../../assets/registlog/mob/bg-mob.png';

import { device } from 'utils/device';

export const Wrapper = styled(Container)`
  @media ${device.mobileOnly} {
    width: 100%;
  }
  display: flex;
  justify-content: center;
`;

export const RegistBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media ${device.mobileOnly} { 
    background-image: url(${bg_mob});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: calc(100vh - 90px);
}

@media ${device.fabletOnly} {
  background-image: url(${bg_tab});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
   height: calc(100vh - 75px);
 }


  @media ${device.tablet} {
    background-image: url(${bg_tab});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
     height: calc(100vh - 130px);
  }

  @media ${device.tabletOnly} {
    background-image: url(${bg_desk});
   
  }

  @media ${device.desktop} {
    background-image: url(${bg_desk});
    height: calc(100vh - 120px);
  }
`;


