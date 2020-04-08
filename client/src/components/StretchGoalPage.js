import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const StretchGoalPage = () => {
    return (
        <StyledStretch>

            <h1>There is nothing here!</h1>    
            <p>Check out my Readme page to read about this project.</p>
     
        </StyledStretch>
    )
};

const StyledStretch = styled.div`

    text-align: center;
    width: 900px;   
    display: flex;
    align-content: center;
    margin-top: 150px; 
    height: 100vh; 
    flex-direction: column; 

    h1{
        font-size: 2.0rem; 
        font-weight: 700; 
        margin-bottom: 20px; 
    }

`

export default StretchGoalPage;