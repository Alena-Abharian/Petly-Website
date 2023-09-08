import React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';

import {
  HeroWrapper,
  ImgLayerOne,
  ImgLayerTwo,
  ImgLayerThree,
} from '../HeroBg.styled';

import layerOne from '../../../assets/hero/desk/1layer.svg';
import layerTwo from '../../../assets/hero/desk/2layer.svg';
import layerThree from '../../../assets/hero/desk/3layer.svg';

function HeroWrap() {
  const { isDesktop } = useMatchMedia();

  return (
    <HeroWrapper>
      {isDesktop && (
        <div>
          <ImgLayerOne src={layerOne} alt="background layers" />
          <ImgLayerTwo src={layerTwo} alt="background layers" />
          <ImgLayerThree src={layerThree} alt="background layers" />
        </div>
      )}
    </HeroWrapper>
  );
}
export default HeroWrap;
