import React from 'react';
import {
  bool, func, string, node,
} from 'prop-types';

import Container from './styles';

const Modal = ({
  show, handleClose, title, children,
}) => (
  <Container show={show}>
    <section className="modal-main">
      <div className="header">
        <span>{title}</span>
        <button type="button" onClick={handleClose}>
          <i className="fa fa-close" />
        </button>
      </div>
      {children}
    </section>
  </Container>
);

Modal.propTypes = {
  title: string.isRequired,
  handleClose: func.isRequired,
  show: bool.isRequired,
  children: node.isRequired,
};

export default Modal;
