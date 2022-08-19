import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
`;

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 200px;
  height: 100px;
  border-radius: 8px;
  padding: 20px;
  background: var(--neutrals-background-active);
  transition: background 0.4s ease;

  &:hover {
    background: var(--neutrals-background-active-hover);
  }

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
    color: var(--neutrals-text-weak);
  }
`;
