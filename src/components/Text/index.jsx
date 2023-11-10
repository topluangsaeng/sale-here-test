import { StyledTitle } from "./text.styled";
import React from 'react'

export const Title = ({ children, white, ...rest }) => {
    if (white) {
        return (
            <StyledTitle style={{ color: '#ffffff'}} {...rest}>{children}</StyledTitle>
        )
    } else {
        return (
            <StyledTitle style={{ color: '#383838'}} {...rest}>{children}</StyledTitle>
        )
    }
    
}
