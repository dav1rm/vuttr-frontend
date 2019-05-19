import React from 'react';
import {
  string, number, arrayOf, shape, func,
} from 'prop-types';

import Button from '../Button';
import Container from './styles';

const Tool = ({
  data: {
    id, title, link, description, tags,
  }, handleRemoveTool,
}) => (
  <Container>
    <div className="header">
      <a href={link}>{title}</a>
      <Button onClick={() => handleRemoveTool(id)} outline title="remove" faIcon="times" />
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
  handleRemoveTool: func,
};

Tool.defaultProps = {
  handleRemoveTool: () => {}
}
export default Tool;
