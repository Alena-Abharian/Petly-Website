import styled from 'styled-components';
import { device } from '../../../utils/device';

export const StyledItem = styled.div`
  width: 100%;
  min-height: 192px;
  margin: 0 auto;
  padding: 12px 4px;
  background-color: #fff;
  border-radius: 20px;
  @media ${device.tablet} {
    min-height: 246px;
  }
  @media ${device.desktop} {
    min-height: 287px;
  }
`;

export const StyledTitle = styled.a`
  font-family: ${p => p.theme.fonts.main};
  display: block;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.accent};
  text-align: center;
  margin-bottom: 12px;
  text-decoration: underline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: pre-wrap;
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.36;
    margin-bottom: 16px;
  }
  @media ${device.desktop} {
    font-size: 22px;
    line-height: 1.23;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledImgWrapper = styled.div`
  min-width: 110px;
  margin-right: 12px;
  @media ${device.tablet} {
    min-width: 115px;
    margin-right: 14px;
  }
  @media ${device.desktop} {
    min-width: 158px;
    margin-right: 16px;
  }
`;

export const StyledContentWrapper = styled.ul``;

export const StyledImg = styled.img`
  width: 110px;
  object-position: center;
  @media ${device.tablet} {
    width: 115px;
  }
  @media ${device.desktop} {
    width: 158px;
  }
`;

export const StyledSubTitle = styled.h4`
  font-family: ${p => p.theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.black};
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.36;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledSubLink = styled.a.attrs(props => ({
  textDecoration: props.isPhone ? '' : 'underline',
}))`
  font-family: ${p => p.theme.fonts.main};
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-decoration: ${props => props.textDecoration};
  color: ${props => props.theme.colors.black};
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.36;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;
export const StyledNoField = styled.p`
  font-family: ${p => p.theme.fonts.main};
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.black};
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.36;
  }
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledMeta = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
