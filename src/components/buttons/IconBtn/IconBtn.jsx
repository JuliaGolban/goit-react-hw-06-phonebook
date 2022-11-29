import React from 'react';
import PropTypes from 'prop-types';
import { DeleteIconBtn } from './IconBtn.styled';

const IconButton = ({ type, children, onClick, ...anyProps }) => (
  <DeleteIconBtn type={type} onClick={onClick} {...anyProps}>
    {children}
  </DeleteIconBtn>
);

IconButton.defaultProps = {
  type: 'button',
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
