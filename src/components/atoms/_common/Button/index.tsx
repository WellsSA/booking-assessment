import React from 'react';

import { StyledButton, ButtonVariant } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  type,
  variant,
  children,
  onClick,
}: Props) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      className="button"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  onClick: () => {},
};
export default Button;
