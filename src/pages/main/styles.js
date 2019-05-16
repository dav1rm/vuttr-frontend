import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 300px 0 300px;
  color: #fff;

  h1 {
    margin-top: 50px;
  }

  h3 {
    margin: 10px 0 20px 0;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .search-bar {
    display: flex;
    flex-direction: row;

    input.search {
      padding: 5px;
      margin-right: 10px;
    }

    label {
      display: flex;
      flex-direction: row;
      align-items: center;
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
