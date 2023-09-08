import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: ${p => `${p.theme.space[8] - 8}px`};
  height: ${p => `${p.theme.space[5] + 6}px`};
  color: ${p => p.theme.colors.accent};
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} #f59256;
  border-radius: ${p => `${p.theme.space[5] + 8}px`};
  /* box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5); */
`;
