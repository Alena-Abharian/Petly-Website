import React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import HeroWrap from './HeroWrap/HeroWrap';

import { ImgStyled } from './HeroBg.styled';

import mob_lady from '../../assets/hero/mob/mob_1x.webp';
import mob_lady2x from '../../assets/hero/mob/mob_2x.webp';
import tab_lady from '../../assets/hero/tab/tab_1x.webp';
import tab_lady2x from '../../assets/hero/tab/tab_2x.webp';
import desk_lady from '../../assets/hero/desk/desc_1x.webp';
import desk_lady2x from '../../assets/hero/desk/desc_2x.webp';
// import layerFour from '../../assets/hero/desk/layer4.svg';

function HeroBg() {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <HeroWrap />

      {isMobile && (
        <ImgStyled
          src={mob_lady}
          srcSet={`${mob_lady2x} 2x`}
          alt="lady with a dog"
        />
      )}
      {isTablet && (
        <ImgStyled
          src={tab_lady}
          srcSet={`${tab_lady2x} 2x`}
          alt="lady with a dog"
        />
      )}
      {isDesktop && (
        <ImgStyled
          src={desk_lady}
          srcSet={`${desk_lady2x} 2x`}
          alt="lady with a dog"
        />
      )}
    </>
  );
}
export default HeroBg;
