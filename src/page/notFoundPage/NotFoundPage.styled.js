import styled from 'styled-components';
import Box from 'components/Common/Box';
import { device } from 'utils/device';

export const BoxStyled = styled(Box)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 10px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  @media ${device.fabletAndMobileOnly} {
    max-width: 480px;
  }

  @media ${device.fablet} {
    margin: auto;
  }

  @media ${device.tablet} {
    max-width: 600px;
  }
`;

export const TextStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.text};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-align: center;

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
