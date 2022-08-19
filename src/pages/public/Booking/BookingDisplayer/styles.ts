import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface CardProps {
  active: boolean;
}

export const Card = styled.div<CardProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 49%;
  height: 100px;
  border-radius: 8px;
  padding: 20px;
  background: var(--neutrals-background-active);
  transition: background 0.4s ease;

  &:hover {
    background: var(--neutrals-background-active-hover);
  }

  ${props =>
    props.active &&
    css`
      background: linear-gradient(
        65deg,
        var(--primary-background-weak),
        var(--secondary-background-weak)
      );

      &:hover {
        background: linear-gradient(
          105deg,
          var(--primary-background-weak),
          var(--secondary-background-weak)
        );
      }
    `}

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
    color: var(--neutrals-text-weak);
  }

  @media (max-width: 668px) {
    width: 100%;
  }
`;
