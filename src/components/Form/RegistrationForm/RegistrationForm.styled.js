import styled from 'styled-components';
import { StyledButton } from 'components/Common/Button/Button.styled';
import { device } from 'utils/device';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[5] + 8}px`};
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[4] + 8}px`};

  @media (${device.fablet}) {
    width: ${p => `${p.theme.space[9] + 106}px`};
    padding: ${p => `${p.theme.space[4] + 28}px ${p.theme.space[6] + 16}px`};
    background: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${p => p.theme.radii.xxl};
  }

  @media (${device.tablet}) {
    width: ${p => `${p.theme.space[9] + 106}px`};
  }
`;

export const BackBtn = styled(StyledButton)`
  padding: 0px;
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.medium};
  background: ${p => p.theme.colors.button.secondaryBackground};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.button.border}`};
  border-radius: ${p => p.theme.radii.xxl};
  font-size: 20px;
  height: ${p => `${p.theme.space[5] + 11}px`};
  color: ${p => p.theme.colors.black};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
    transition: color ${p => p.theme.animation.cubic};
  }

  @media (${device.tablet}) {
    height: ${p => `${p.theme.space[5] + 16}px`};
  }
`;
