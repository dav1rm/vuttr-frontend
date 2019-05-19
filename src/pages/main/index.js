import React, { Component } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';

import api from '../../services/api';

import Modal from '../../components/Modal';
import Tool from '../../components/Tool';
import Button from '../../components/Button';

import { Container, Toolbar } from './styles';

export default class Main extends Component {
  state = {
    tools: [],
    modalAdd: false,
    modalRemove: false,
    id: '',
  };

  componentDidMount() {
    this.getTools();
  }

  getTools = async () => {
    const { data } = await api.get('/tools');

    this.setState({ tools: data.reverse() });
  };

  handleSubmitAddTool = async (data, { resetForm }) => {
    const { tools } = this.state;

    const tags = data.tags.trim().split(' ');

    const tagsUnique = tags.filter((este, i) => tags.indexOf(este) === i);

    const res = await api.post('tools', { ...data, tags: tagsUnique });

    this.setState({ tools: [res.data, ...tools], modalAdd: false });
    resetForm();
  };

  handleRemoveTool = async () => {
    const { tools, id } = this.state;

    await api.delete(`tools/${id}`);

    this.setState({ tools: tools.filter(tool => tool.id !== id), modalRemove: false, id: '' });
  };

  handleOpenModalRemoveTool = (id) => {
    this.setState({ modalRemove: true, id });
  };

  renderAddTool = () => (
    <Form onSubmit={this.handleSubmitAddTool}>
      <span>Title</span>
      <Input name="title" />
      <span>Link</span>
      <Input name="link" />
      <span>Description</span>
      <Textarea name="description" rows="4" />
      <span>Tags</span>
      <Input name="tags" />

      <div>
        <Button title="Add tool" type="submit" />
      </div>
    </Form>
  );

  renderRemoveTool = () => (
    <div className="remove-content">
      <span>Are you sure you want to remove tool?</span>

      <div>
        <Button title="Cancelar" outline onClick={() => this.setState({ modalRemove: false })} />
        <Button title="Yes, remove" onClick={this.handleRemoveTool} />
      </div>
    </div>
  );

  render() {
    const { tools, modalAdd, modalRemove } = this.state;
    return (
      <Container>
        <Modal
          show={modalAdd}
          title="Add new tool"
          handleClose={() => this.setState({ modalAdd: false })}
        >
          {this.renderAddTool()}
        </Modal>
        <Modal
          show={modalRemove}
          title="Remove tool"
          handleClose={() => this.setState({ modalRemove: false })}
        >
          {this.renderRemoveTool()}
        </Modal>
        <div className="title">
          <h1>VUTTR</h1>
          <span>Very Useful Tools to Remember</span>
        </div>
        <Toolbar>
          <div className="search-bar">
            <div className="search-container">
              <i className="fa fa-search" />
              <input className="search" placeholder="search" />
            </div>
            <label htmlFor="only-tags">
              <input id="only-tags" type="checkbox" /> search in tags only
            </label>
          </div>

          <Button title="Add" onClick={() => this.setState({ modalAdd: true })} faIcon="plus" />
        </Toolbar>
        <div className="tools">
          {tools.map(tool => (
            <Tool key={tool.id} data={tool} handleRemoveTool={this.handleOpenModalRemoveTool} />
          ))}
        </div>
      </Container>
    );
  }
}
