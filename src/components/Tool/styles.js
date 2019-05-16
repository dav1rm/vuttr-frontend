import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #3e464c;
  /* box-shadow: 0px 1px 3px 0px #2323239e; */

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
  border: 0;
  transition: background-color 0.3s ease-out;

  i {
    margin-right: 5px;
  }

  &:hover {
    background-color: #363f45;
  }
`;
