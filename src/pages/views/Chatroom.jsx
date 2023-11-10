import React from "react"
import { Title } from "../../components/Text"
import { ChatRoomContainer } from "../../components/Container"
import { StyledBadge } from "../../components/Badge/badge.styled"

const Chatroom = ({ roomName }) => {
  console.log(roomName)
  return (
    <>
      <div>
        <Title>ห้อง {roomName}</Title>
        <ChatRoomContainer>
          <h6>คุณ eiei</h6>
          <StyledBadge pill bg="info">สวัสดี</StyledBadge>
        </ChatRoomContainer>

      </div>
     
    </>
  )
}

export default Chatroom