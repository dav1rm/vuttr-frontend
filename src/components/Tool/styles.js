import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #3e464c;
  border-radius: 3px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    a {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }
  }

  .content {
    margin-bottom: 20px;
    color: #ccc;
  }

  .footer {
    font-weight: bold;
    color: #00bbd3;
    span {
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  color: #fff;
  background-color: #3e464c;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-out;

  i {
    margin-right: 5px;
  }

  &:hover {
    border: 1px solid #3e50b4;
    background-color: #363f45;
  }
`;
