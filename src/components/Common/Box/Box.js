import styled from 'styled-components';
import {
  position,
  space,
  layout,
  flexbox,
  color,
  grid,
  background,
  border,
  typography,
} from 'styled-system';

const Box = styled.div`
  ${position};
  ${space};
  ${layout};
  ${flexbox};
  ${color};
  ${grid};
  ${background};
  ${border};
  ${typography};
`;

export default Box;
