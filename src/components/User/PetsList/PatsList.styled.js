import styled from 'styled-components';
import { device } from 'utils/device';

export const LiItem = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;

  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 20px;
  margin-bottom: 20px;

  @media ${device.desktop} {
    margin-bottom: 22px;
  }
}

@media ${device.fabletAndMobileOnly} {
  flex-direction: column;
  align-items: center;
}
`;

export const UlWrap = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${device.fabletAndMobileOnly} {
    margin-top: 20px;
    width: 235px;
  }
  @media ${device.tablet} {
    margin-left: 32px;
  }
`;

export const LiWrap = styled.li`
  display: flex;
  margin-bottom: 12px;
`;

export const LiWrapComment = styled.li`
  display: flex;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;

  @media ${device.fabletAndMobileOnly} {
    width: 240px;
    height: 240px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const SpanComments = styled.span`
  margin-left: 5px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  @media ${device.fabletAndMobileOnly} {
    width: 235px;
    word-wrap: break-word;
  }

  @media ${device.mobileOnly} {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 44px;
  height: 44px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  fill: rgba(17, 17, 17, 0.6);

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.accent}
  }

  @media ${device.fabletAndMobileOnly} {
    right: 20px;
    top: 268px;
  }
`;
