import { Container } from 'react-bootstrap'
import { styled } from 'styled-components'

export const WhiteContainer = styled(Container)`
    background-color: #ffffff;
    border-radius: 20px;
    height: 90vh;
    padding: 20px;
    width: 1000px;
`

export const ChatContainer = styled(WhiteContainer)`
    background-color: #f9f9f9;
    width: calc(100% - 40px);
    height: 70vh;
`

