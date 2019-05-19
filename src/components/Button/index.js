import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const Button = ({
  faIcon, title, onClick, outline, cancel,
}, ...rest) => (
  <Container onClick={onClick} outline={outline} cancel={cancel} {...rest}>
    {!!faIcon && <i className={`fa fa-${faIcon}`} />}
    {title}
  </Container>
);

Button.propTypes = {
  faIcon: PropTypes.string,
  outline: PropTypes.bool,
  cancel: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  faIcon: '',
  outline: false,
  cancel: false,
  onClick: () => {},
};

export default Button;
