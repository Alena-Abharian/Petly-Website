import styled from 'styled-components';
import mob_bg from '../../assets/hero/mob/mob_bg.svg';
import tab_bg from '../../assets/hero/tab/Vector.svg';
import desk_bg from '../../assets/hero/desk/layer.svg';

import { device } from 'utils/device';

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;

  @media ${device.fabletAndMobileOnly} {
    background-image: url(${mob_bg});
    background-size: 620px 470px;
  }

  @media ${device.tablet} {
    background-image: url(${tab_bg});
    background-size: 100% 100%;
  }

  @media ${device.desktop} {
    background-image: url(${desk_bg});
    background-size: contain;
    background-position: bottom;
  }
`;

export const ImgStyled = styled.img`
  position: absolute;
  bottom: 0;
  right: calc(100% / 2);
  transform: translate(50%, 0px);

  @media ${device.tablet} {
    height: calc(100% * 0.6);
  }

  @media ${device.desktop} {
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;

    transform: none;
  }
`;

export const ImgLayerOne = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(100% / 2);
  transform: translate(-50%, 0px);
  height: calc(100% * 0.6);
`;

export const ImgLayerTwo = styled.img`
  width: 63px;
  height: 63px;

  position: absolute;
  bottom: calc(100% / 3.5);
  left: calc(100% / 2.8);
`;

export const ImgLayerThree = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  right: calc(100% / 2.5);
  bottom: calc(100% / 1.6);
`;

// export const ImgLayerFour = styled.img`
//   width: 511px;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `;
