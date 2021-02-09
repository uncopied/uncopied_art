import React from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRepeat } from "react-icons/bs";
import styled, { keyframes } from 'styled-components/macro';

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <ButtonComponent
      disabled={disabled || isLoading}
      className={`LoaderButton ${className}`}
      {...props}
    >
      {isLoading && <Spinning />}
      {props.children}
    </ButtonComponent>
  );
}

const ButtonComponent = styled(Button)`
  margin-right: 7px;
  top: 2px;
  animation: spin 1s infinite linear;
`;

const spin = keyframes`
  from {
    transform: scale(1) rotate(0deg);
  }
  to {
    transform: scale(1) rotate(360deg);
  }
`;

const Spinning = styled(BsArrowRepeat)`
  margin-right: 7px;
  top: 2px;
  animation: ${spin} 1s infinite linear;
`;