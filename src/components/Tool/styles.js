import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
