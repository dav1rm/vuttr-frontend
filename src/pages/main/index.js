import React, { Component } from 'react';

import api from '../../services/api';

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
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
        <Toolbar>
          <form>
            <input type="text" placeholder="search" />

            <label htmlFor="only-tags">
              <input id="only-tags" type="checkbox" /> search in tags only
            </label>

            <button type="submit">Add</button>
          </form>
        </Toolbar>
        <div className="tools">
          {tools.map(tool => (
            <div>
              <div className="header">
                <a href={tool.link}>{tool.title}</a>
                <button type="submit">remove</button>
              </div>
              <div className="content">
                <p>{tool.description}</p>
              </div>
              <div className="footer">
                {tool.tags.map(tag => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
