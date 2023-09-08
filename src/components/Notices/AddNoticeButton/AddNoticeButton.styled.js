import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { device } from 'utils/device';

export const AddPetBox = styled.div`
  width: 115px;
  position: fixed;
  top: 75%;
  right: ${p => `${p.theme.space[0]}px`};
  display: flex;
  align-items: center;
  gap: ${p => `${p.theme.space[3] + 4}px`};
  z-index: 10;

  @media ${device.tablet} {
    position: static;
    /* top: ${p => `${p.theme.space[9] - 150}px`}; */
  }

  /* @media ${device.desktop} {
    top: ${p => `${p.theme.space[9] - 180}px`};
  } */
`;

export const AddPetBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => `${p.theme.space[6] + 16}px`};
  height: ${p => `${p.theme.space[6] + 16}px`};
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.round};
  @media ${device.tablet} {
    width: ${p => `${p.theme.space[6] - 20}px`};
    height: ${p => `${p.theme.space[6] - 20}px`};
  }
`;

export const AddPetSvg = styled(Plus)``;
