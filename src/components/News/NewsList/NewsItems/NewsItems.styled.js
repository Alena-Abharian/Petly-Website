import styled from 'styled-components';
import { device } from '../../../../utils/device';

export const StyledLine = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media ${device.tablet} {
    width: 280px;
    height: 8px;
  }
  @media ${device.desktop} {
    width: 340px;
  }
`;

export const StyledTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: ${props => props.theme.colors.text.sectionTitle};
  margin-bottom: 16px;
  letter-spacing: ${props => props.theme.letterSpacing.xs};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
`;

export const StyledDesc = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text.primaryText};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  white-space: pre-wrap;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const StyledMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDate = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38px;
  color: ${props => props.theme.colors.text.dataText};
`;

export const StyledLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.text.accent};
`;
