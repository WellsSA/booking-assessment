import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .namedSection {
    max-width: 800px;
  }

  form {
    display: flex;
    flex-direction: column;
    overflow-x: auto;

    label {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      font-size: 1.2rem;
    }

    input {
      font-size: 1.2rem;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  }
`;
