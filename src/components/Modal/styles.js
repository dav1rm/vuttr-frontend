import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 2;

  .modal-main {
    color: #fff;
    position: fixed;
    width: 35%;
    height: auto;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background: #363f45;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 20px;

      padding-bottom: 25px;

      span {
        font-weight: bold;
        align-self: center;
      }

      button {
        font-size: 20px;
        color: #fff;
        border: none;
        background-color: transparent;

        &:hover {
          color: #ccc;
        }
      }
    }

    .remove-content {
      display: flex;
      flex-direction: column;

      span {
        font-size: 18px;
        margin-bottom: 20px;
      }

      div {
        display: flex;
        height: 30px;
        justify-content: flex-end;

        .cancel {
          background-color: #777;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 0 20px;

      span {
        font-size: 14px;
        padding: 5px 0;
      }

      input {
        flex: 1;
        border: 1px solid #d2d2d2;
        border-radius: 2px;
        padding: 5px;
        margin-bottom: 15px;
        font-size: 16px;
        background: #ccc;
      }

      textarea {
        border: 1px solid #d2d2d2;
        border-radius: 2px;
        padding: 5px;
        margin-bottom: 15px;
        flex: 1;
        font-size: 16px;
        resize: none;
        background: #ccc;
        font-family: Arial, Helvetica, sans-serif;
      }

      div {
        display: flex;
        height: 30px;
        justify-content: flex-end;
      }
    }
  }
`;

export default Container;
