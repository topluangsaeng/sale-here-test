
import React from 'react'
import { StyledBadge } from './badge.styled';

export const ChatBadge = ({ children, ...rest }) => {
  return <StyledBadge bg="info" {...rest}>{children}</StyledBadge>;
};

