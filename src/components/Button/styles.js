import styled from 'styled-components';

const Container = styled.button`
  padding: 5px 10px 5px 10px;
  color: #fff;
  font-size: 14px;
  background-color: ${({ outline }) => (outline ? '#3e464c' : '#3e50b4')};
  border: ${({ outline }) => (outline ? '1px solid transparent' : 0)};
  border-radius: 2px;
  transition: background-color 0.3s ease-out;

  box-shadow: ${({ outline }) => (outline ? 'none' : '0px 0px 5px 0px #2323239e')};

  i {
    margin-right: 5px;
  }

  &:hover {
    border: ${({ outline }) => (outline ? '1px solid #3e50b4' : 0)};
    background-color: ${({ outline }) => (outline ? '#363f45' : '#2f3e9e')};
    box-shadow: ${({ outline }) => (outline ? 'none' : '0px 1px 3px 0px #2323239e')};
  }
`;

export default Container;
