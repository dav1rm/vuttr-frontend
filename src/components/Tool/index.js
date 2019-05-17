import React from 'react';
import {
  string, number, arrayOf, shape,
} from 'prop-types';

import Button from '../Button';
import Container from './styles';

const Tool = ({
  data: {
    title, link, description, tags,
  },
}) => (
  <Container>
    <div className="header">
      <a href={link}>{title}</a>
      <Button outline title="remove" faIcon="times" />
    </div>
    <div className="content">
      <p>{description}</p>
    </div>
    <div className="footer">
      {tags.map(tag => (
        <span key={tag}>#{tag}</span>
      ))}
    </div>
  </Container>
);

Tool.propTypes = {
  data: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    link: string,
    tags: arrayOf(string).isRequired,
  }).isRequired,
};
export default Tool;
