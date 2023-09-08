import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export default function Section({ id, style, onClick, children }) {
  return (
    <>
      <StyledSection id={id} onClick={onClick} style={style}>
        {children}
      </StyledSection>
    </>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
