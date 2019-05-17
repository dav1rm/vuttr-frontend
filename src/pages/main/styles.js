import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 0 300px;

  .title {
    margin: 25px 0;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  .search-bar {
    display: flex;
    flex-direction: row;
    height: 30px;

    .search-container {
      display: flex;
      background-color: #fff;
      color: #3e50b4;
      padding: 5px;
      margin-right: 10px;
      border: 1px solid transparent;
      border-radius: 2px;

      &:focus-within {
        border-color: #3e50b4;
      }
    }

    input.search {
      border: 0;
      padding: 5px;
      margin-left: 5px;
    }

    label {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin: 5px;
      }
    }
  }
`;

export const Button = styled.button`
  padding: 5px 15px 5px 15px;
  color: #fff;
  font-size: 14px;
  background-color: #3e50b4;
  border: 0;
  border-radius: 2px;
  transition: background-color 0.3s ease-out;
  box-shadow: 0px 0px 5px 0px #2323239e;

  i {
    margin-right: 5px;
  }

  &:hover {
    background-color: #2f3e9e;
    box-shadow: 0px 1px 3px 0px #2323239e;
  }
`;
