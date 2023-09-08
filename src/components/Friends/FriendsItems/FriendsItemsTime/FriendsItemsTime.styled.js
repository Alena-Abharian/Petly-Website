import styled from 'styled-components';
import { device } from '../../../../utils/device';
import { StyledMeta, StyledSubTitle } from '../FriendsItems.styled';

export const StyledTimeWrapper = styled(StyledMeta)`
  position: relative;
  cursor: pointer;
`;

export const StyledTimeTitle = styled(StyledSubTitle).attrs(props => ({
  color: props.isOpen ? '#F59256' : '#000000',
}))`
  font-family: ${p => p.theme.fonts.main};
  transition: color ${p => p.theme.animation.cubic};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.color};
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.36;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledTimeDesc = styled.p.attrs(props => ({
  color: props.isOpen ? '#F59256' : '#000000',
}))`
  font-family: ${p => p.theme.fonts.main};
  transition: color ${p => p.theme.animation.cubic};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.color};
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.36;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;
export const StyledFullTimeItem = styled.div`
  font-family: ${p => p.theme.fonts.main};
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.black};
`;

export const StyledSpan = styled.p``;

export const StyledFullTime = styled.div.attrs(props => ({
  opacity: props.isOpen ? '1' : '0',
  pointerEvents: props.isOpen ? 'unset' : 'none',
}))`
  transition: opacity ${p => p.theme.animation.cubic};
  pointer-events: ${props => props.pointerEvents};
  opacity: ${props => props.opacity};
  position: absolute;
  top: 35px;
  left: 0;
  min-width: 130px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.accent};
  padding: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media ${device.tablet} {
    top: 42px;
  }
  @media ${device.desktop} {
    top: 48px;
  }
`;
