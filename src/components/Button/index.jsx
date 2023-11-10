import { StyledButton, StyledTextButton } from "./button.styled";
import React from 'react'

export const MainButton = ({ children, ...rest }) => {
  return <StyledButton size="lg" {...rest}>{children}</StyledButton>;
};

export const SubButton = ({ children, ...rest }) => {
  return <StyledTextButton size="lg" variant="light" {...rest}>{children}</StyledTextButton>;
};