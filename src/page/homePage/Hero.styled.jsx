import styled from 'styled-components';
import { device } from 'utils/device';

export const HeroTitle = styled.h1`
  padding: 0 20px;
  position: relative;
  z-index: 1;

  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.body};

  color: ${({ theme }) => theme.colors.black};

  @media ${device.tablet} {
    padding: 0 0 0 32px;
    max-width: 600px;

    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: ${({ theme }) => theme.lineHeights.hero};
  }

  @media ${device.desktop} {
    padding: 0 0 0 16px;
  }
`;
