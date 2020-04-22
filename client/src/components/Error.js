import React from 'react'
import styled from 'styled-components'
import { GoAlert } from "react-icons/go";
import { Link } from "@reach/router"
import { FaRobot } from 'react-icons/fa'



const Error = () => {
    return (
        <Container>
            <StyledIcon>
                <FaRobot />
            </StyledIcon>
            <h2>This is embarassing.</h2>
            <p>Try going <Link to='/'>home.</Link> </p>
        </Container>

    )

}
const Container = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column; 
    height: 100vh; 
    margin: 50% 50%; 
    /* margin: auto;  */
    /* top: 50%; 
    left: 50%;  */
    /* transform: translate(-50%, -50%); */
    align-items: center;
    width: 100%; 
    h2{
        font-weight: 700; 
        margin: 20px 0; 
        font-size: 2.2rem; 
        text-align: center;
    }

`

const StyledIcon = styled(FaRobot)`
    width: 100px; 
    height: 100px; 
`

export default Error