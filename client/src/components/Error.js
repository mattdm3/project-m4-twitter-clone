import React from 'react'
import styled from 'styled-components'
import { GoAlert } from "react-icons/go";
import {Link} from "@reach/router"



const Error = () => {
    return(
        <Container>
            <StyledIcon>
                <GoAlert />
            </StyledIcon>
            <h2>Something is broken.</h2>
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
    align-items: center;
    width: 100%; 
    h2{
        font-weight: 700; 
        margin: 20px 0; 
        font-size: 2.2rem; 
        text-align: center;
    }

`

const StyledIcon = styled(GoAlert)`

    width: 400px; 
    height: 200px; 

`

export default Error