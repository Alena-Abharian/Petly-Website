import styled from 'styled-components';
import { device } from 'utils/device';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media ${device.tabletOnly} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export default Container;
