import React, { Component } from 'react';

import api from '../../services/api';

import Tool from '../../components/Tool';
import Button from '../../components/Button';

import { Container, Toolbar } from './styles';

export default class Main extends Component {
  state = {
    tools: [],
  };

  componentDidMount() {
    this.getTools();
  }

  getTools = async () => {
    const { data } = await api.get('/tools');
    this.setState({ tools: data });
  };

  render() {
    const { tools } = this.state;
    return (
      <Container>
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

          <Button title="Add" onClick={() => {}} faIcon="plus" />
        </Toolbar>
        <div className="tools">
          {tools.map(tool => (
            <Tool key={tool.id} data={tool} />
          ))}
        </div>
      </Container>
    );
  }
}
