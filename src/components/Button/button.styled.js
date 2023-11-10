import { Button } from 'react-bootstrap'
import styled from 'styled-components'


export const StyledButton = styled(Button)`
    color: #ffffff;
    background-image: radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)
`;

export const StyledTextButton = styled(Button)`
    color: #6f6f6f;
    &:hover {
        color: #c41417;
    }
`;