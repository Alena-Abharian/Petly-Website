import maze from '../../assets/images/maze.png';
import { AccentLink } from 'components/Header/AuthNav/AuthNav.styled';
import { BoxStyled, TextStyled } from './NotFoundPage.styled';
import { HeroTitle } from 'page/homePage/Hero.styled';
import HeroWrap from 'components/HeroBg/HeroWrap/HeroWrap';

const NotFound = () => {
  return (
    <>
      <BoxStyled>
        <HeroTitle style={{ paddingLeft: '0' }}>Page Not Found</HeroTitle>
        <TextStyled>
          Ah, the dreaded <b>404</b>. Let's get you back on track
        </TextStyled>
        <div>
          <img src={maze} alt="maze game" />
        </div>
        <AccentLink to="/" style={{ marginLeft: 'auto' }}>
          Home page
        </AccentLink>
      </BoxStyled>
      <HeroWrap />
    </>
  );
};

export default NotFound;
