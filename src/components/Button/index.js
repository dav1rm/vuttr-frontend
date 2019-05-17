import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const Button = ({
  faIcon, title, onClick, outline,
}) => (
  <Container type="button" onClick={onClick} outline={outline}>
    {!!faIcon && <i className={`fa fa-${faIcon}`} />}
    {title}
  </Container>
);

Button.propTypes = {
  faIcon: PropTypes.string,
  outline: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  faIcon: '',
  outline: false,
  onClick: () => {},
};

export default Button;
