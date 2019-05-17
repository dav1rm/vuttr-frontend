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
