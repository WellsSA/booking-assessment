import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'danger' | 'outlined';

interface Props {
  variant?: ButtonVariant;
}

export const StyledButton = styled.button<Props>`
  border: none;
  padding: 10px;
  border-radius: 4px;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: var(--primary-text);
          background: var(--primary-color);
        `;
      case 'danger':
        return css`
          color: var(--danger-text);
          background: var(--danger-color);
        `;
      case 'outlined':
        return css`
          color: var(--danger-color);
          background: transparent;
          border: 1px solid var(--danger-color);
        `;
      default:
        return null;
    }
  }}
`;
