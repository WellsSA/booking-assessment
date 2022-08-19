import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'danger' | 'outlined';

interface Props {
  variant?: ButtonVariant;
}

export const StyledButton = styled.button<Props>`
  border: none;
  padding: 10px;
  border-radius: 4px;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: var(--primary-text);
          background: var(--primary-color);

          &:hover {
            background: var(--primary-color-active);
          }
        `;
      case 'danger':
        return css`
          color: var(--danger-text);
          background: var(--danger-color);

          &:hover {
            background: var(--danger-color-active);
          }
        `;
      case 'outlined':
        return css`
          color: var(--danger-color);
          background: transparent;
          border: 1px solid var(--danger-color);

          &:hover {
            color: var(--danger-text);
            background: var(--danger-color-weak);
          }
        `;
      default:
        return null;
    }
  }}
`;
