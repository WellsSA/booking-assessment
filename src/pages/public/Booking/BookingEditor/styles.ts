import styled from 'styled-components';

export const Container = styled.div`
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

    button[type='submit'] {
      color: var(--primary-text);
      background: var(--primary-color);
      border: none;
      padding: 10px;
      border-radius: 4px;
    }
  }
`;
