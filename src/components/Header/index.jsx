import { Image } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import React from 'react'

export const Header = ({ children, ...rest }) => {
    return (
      <div style={{ textAlign: 'center',  }}>
        <Image src={logo} height="100%" width="200" alt="" />
      </div>
    )
}