import styled from 'styled-components';
import Container from '../../components/Common/Container';
import { device } from '../../utils/device';

export const Section = styled.section`
  background-color: #fdf7f2;
  width: 100%;
  height: 100%;
  padding: 26px 0 100px;
  @media ${device.tablet} {
    padding: 74px 0 100px;
  }
  @media ${device.desktop} {
    padding: 41px 0 100px;
  }
`;
export const StyledContainer = styled(Container)`
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.desktop} {
    width: 1280px;
  }
`;
// export const StyledTitle = styled.h2`
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 1.38;
//   text-align: center;
//   font-family: ${p => p.theme.fonts.main};
//   color: ${p => p.theme.colors.black};
//   margin-bottom: 28px;
//   @media ${device.tablet} {
//     font-size: 48px;
//     line-height: 2.35;
//   }
// `;
export const StyledTitle = styled.h2`
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text.sectionTitle};
  margin-bottom: ${p => `${p.theme.space[5] - 4}px`};
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.xxl};
    margin-bottom: ${p => `${p.theme.space[5] + 8}px`};
  }
`;
