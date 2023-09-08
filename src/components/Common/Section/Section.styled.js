import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledSection = styled.section`
  background-color: #fdf7f2;
  width: 100%;
  height: 100%;
  /* padding: 26px 0 100px; */
  padding: 0px 0 50px;
  @media ${device.tablet} {
    /* padding: 74px 0 100px; */
    padding: 0px 0 100px;
  }
  @media ${device.desktop} {
    /* padding: 41px 0 100px; */
    padding: 0px 0 100px;
  }
`;
