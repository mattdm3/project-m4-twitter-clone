import React from "react"
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';
import { heart } from 'react-icons-kit/feather/heart'

const StyledSvg = styled.svg`
    display: block; 
    fill: red; 
`

const HeartSVG = () => {
    return (

        <StyledSvg>
            <Icon icon={heart} color="red" />
        </StyledSvg>

    )
}

export default HeartSVG; 