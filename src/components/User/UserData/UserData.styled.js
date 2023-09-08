import styled from 'styled-components';
import { device } from 'utils/device';

export const DivWrap = styled.div`
  position: relative;
`;

export const DivPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 233px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};

  @media ${device.fabletAndMobileOnly} {
    margin-bottom: 40px;
  }
  @media ${device.desktop} {
    margin-bottom: 32px;
    margin-left: 89px;
  }
`;

export const ImgPhoto = styled.img`
  width: 233px;
  height: 233px;
  border-radius: ${p => p.theme.radii.round};
`;


export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media ${device.desktop} {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background: none;
  position: absolute;
  fill: ${p => p.theme.colors.accent};

  @media ${device.fabletAndMobileOnly} {
    top: 228px;
    right: -25px;
  }
  @media ${device.tablet} {
    top: 241px;
    right: -6px;
  }
  @media ${device.desktop} {
    top: 224px;
    right: -61px;
  }
`;

export const Span = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.sectionTitle};
`;

export const EditWrap = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
