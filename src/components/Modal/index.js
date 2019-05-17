import React, { Component } from 'react';

import Container from './styles';

export default class Modal extends Component {
  state = {
    title: '',
    // description: '',
    // link: '',
    // tags: [],
    loading: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, loading } = this.state;
    if (!title) return;

    if (loading) return;

    // await this.props.addDeveloperRequest({ cordinates, title });
    this.setState({ title: '' });
  };

  render() {
    const { title, loading } = this.state;
    const { show, handleClose } = this.props;
    return (
      <Container show={show}>
        <section className="modal-main">
          <b>Add new tool</b>
          <form onSubmit={this.handleSubmit} method="post">
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                onChange={e => this.setState({ title: e.target.value })}
                placeholder="writing the title"
                value={title}
              />
            </label>
            <div>
              <button className="default" type="button" onClick={handleClose}>
                Cancelar
              </button>
              <button className="success" type="submit">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
              </button>
            </div>
          </form>
        </section>
      </Container>
    );
  }
}
