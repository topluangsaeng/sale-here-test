import { Title } from '../../components/Text'
import { StyledInput } from '../../components/Input/input.styled'
import { MainButton, SubButton } from '../../components/Button'
import React, { useState } from 'react'
import Chatroom from './Chatroom'


const Login = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [joinRoom, setJoinRoom] = useState(false)
  const [createRoom, setCreateRoom] = useState(false)
  const [userName, setUserName] = useState(false)
  const [roomName, setRoomName] = useState(false)

  const submitForm = (result) => {
     // eslint-disable-next-line default-case
     switch (result) {
      case 'next':
        setUserName(true)
        break
      case 'back':
        setJoinRoom(false)
        setCreateRoom(false)
        setRoom('')
        break
    }
  }

  const enterRoom = () => {
    if (room) {
      setRoomName(true)
    }
    
  }

  const joinOrCreateRoom = (result) => {
    // eslint-disable-next-line default-case
    switch (result) {
      case 'create':
        setCreateRoom(true)
        break
      case 'join':
        setJoinRoom(true)
        break
    }

  }
  return (
    <>
      {userName ? (
        <div hidden={createRoom || joinRoom}>
          <div style={{ textAlign: 'center', padding: '25px'}}>
            <Title>คุณ {name}</Title>
          </div>
          <div style={{ padding: '100px 0 20px 0', textAlign: 'center'}}>
            <MainButton onClick={() => joinOrCreateRoom('create')} style={{ width: '250px'}}><Title white>สร้างห้องใหม่</Title></MainButton>
          </div>
          <div style={{ textAlign: 'center'}}>
            <SubButton onClick={() => joinOrCreateRoom('join')} style={{ width: '250px'}}><Title>เข้าร่วมแชท</Title></SubButton>
          </div>
        </div>
      ) : (
        <>
          <div style={{ textAlign: 'center', padding: '25px'}}>
            <Title>ชื่อของคุณ</Title>
          </div>
          <div style={{ padding: '20px 0', textAlign: 'center'}}>
            <StyledInput value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ textAlign: 'center'}}>
            {name && <MainButton onClick={() => submitForm('next')}>ยืนยัน</MainButton>}
          </div>
        </>
      )}
      {joinRoom && (
        <div hidden={roomName}>
          <div style={{ textAlign: 'center', padding: '25px'}}>
            <Title>เข้าร่วมแชท</Title>
          </div>
          <div style={{ padding: '20px 0', textAlign: 'center'}}>
            <StyledInput value={room} onChange={(e) => setRoom(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '0 10px 0 0' }}>
              <SubButton onClick={() => submitForm('back')}>กลับ</SubButton>
            </div>
            <div style={{ textAlign: 'center' }}>
              <MainButton onClick={enterRoom}>เข้าร่วม</MainButton>
            </div>
          </div>
        </div>
      )}
      {createRoom && (
        <div hidden={roomName}>
          <div style={{ textAlign: 'center', padding: '25px'}}>
            <Title>สร้างห้องใหม่</Title>
          </div>
          <div style={{ padding: '20px 0', textAlign: 'center'}}>
            <StyledInput value={room} onChange={(e) => setRoom(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '0 10px 0 0' }}>
              <SubButton onClick={() => submitForm('back')}>กลับ</SubButton>
            </div>
            <div style={{ textAlign: 'center' }}>
              <MainButton onClick={enterRoom}>ยืนยัน</MainButton>
            </div>
          </div>
        </div>
      )}
      {roomName && (
        <Chatroom roomName={room || ''} />
      )}
      
    </>
  )
}

export default Login

