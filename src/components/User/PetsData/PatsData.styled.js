import styled from 'styled-components';
import { device } from 'utils/device';

export const DivWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DivWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.fabletAndMobileOnly} {
    margin-top: 40px;
    margin-bottom: 26px;
  }

  @media ${device.tabletOnly} {
    margin-top: 20px;
    margin-bottom: 22px;
  }
  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: ${p => p.theme.colors.black};

  @media ${device.mobileOnly} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: ${p => p.theme.colors.black};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  margin-left: 15px;
`;

export const ImgAdd = styled.img`
  width: 24px;
  height: 24px;
`;
