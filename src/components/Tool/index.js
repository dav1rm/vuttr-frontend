import React from 'react';

import { Container, Button } from './styles';

// eslint-disable-next-line react/prop-types
const Tool = ({ data }) => (
  <Container>
    <div className="header">
      <a href={data.link}>{data.title}</a>
      <Button>
        <i className="fa fa-times" />
        remove
      </Button>
    </div>
    <div className="content">
      <p>{data.description}</p>
    </div>
    <div className="footer">
      {data.tags.map(tag => (
        <span>#{tag}</span>
      ))}
    </div>
  </Container>
);

export default Tool;
