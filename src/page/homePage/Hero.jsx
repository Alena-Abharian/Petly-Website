import React from 'react';
import HeroBg from 'components/HeroBg';
import { HeroTitle } from './Hero.styled';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Take good care of your small pets'],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <HeroTitle ref={el}></HeroTitle>
      <HeroBg />
    </>
  );
}

export default Hero;
