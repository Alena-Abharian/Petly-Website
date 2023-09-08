import styled from 'styled-components';
import { device } from 'utils/device';

export const ModalBackdrop = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  display: flex;

  justify-content: center;
  align-items: baseline;
  pointer-events: all;
  overflow: scroll;
  @media ${device.fabletAndMobileOnly} {
    padding-top: 50px;
    padding-bottom: 100px;
  }

  @media ${device.tablet} {
    align-items: center;
  }
  @media ${device.fablet} {
    ${p =>
      p.up?.add === 'add' && {
        alignItems: 'flex-start',
      }}
  }
  @media ${device.tablet} {
    ${p =>
      p.up?.add === 'add' && {
        alignItems: 'flex-start',
      }}
  }
  @media ${device.desktop} {
    ${p =>
      p.up?.add === 'add' && {
        alignItems: 'flex-start',
      }}
  }
`;

export const ModalContent = styled.div`
  padding: 20px 20px;
  border-radius: ${p => `${p.theme.space[5] + 8}px`};
  background-color: ${p => p.theme.colors.white};

  ${p =>
    p.up?.add === 'add' && {
      padding: '40px 20px',
    }};

  @media ${device.tablet} {
    padding: 32px 20px;

    ${p =>
      p.up?.add === 'add' && {
        padding: '40px 80px',
      }};
  }
`;
