import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type,
  onClick,
  disabled = true,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  &:disabled {
    cursor: auto;
    background-color: #1B1B1B;
    color: rgba(255, 255, 255, 0.75);
  }
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 47px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard';
  white-space: nowrap;
  background-color: #FFF626;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
`;

export default Button;