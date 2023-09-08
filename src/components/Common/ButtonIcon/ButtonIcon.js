import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonIcon } from './ButtonIcon.styled';

export default function ButtonIcon({
  children = null,
  onClick = () => {},
  hasBtnClose = true,
  ...allyProps
}) {
  return (
    <StyledButtonIcon type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledButtonIcon>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
