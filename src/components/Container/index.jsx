import { WhiteContainer, ChatContainer } from "./container.styled";
import React from 'react'

export const ChatRoomContainer = ({ children, ...rest }) => {
    return (
        <ChatContainer {...rest}>{children}</ChatContainer>
    )
}

export const SubContainer = ({ children, ...rest }) => {
    return (
        <WhiteContainer style={{ marginTop: '12px'}} {...rest}>{children}</WhiteContainer>
    )
}