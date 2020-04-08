import React from "react"
import styled from "styled-components"
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import PulseLoader from 'react-spinners/PulseLoader'
import BeatLoader from "react-spinners/BeatLoader"

export const ContentContainer = styled.div`
    position: absolute;
    left: 340px; 
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    width: 900px; 
    margin-right: 80px; 
    border-right: 1px solid #EEEEEE;
    border-left: 1px solid #EEEEEE; 
    
`

export const PageContainer = styled.div`
display: flex; 
`

const styledLoader = css`
    margin: 0 auto;
    margin-top: 25%;
`
const styledLoaderUpdate = css`
    margin-top: 20%;
    margin-left: 35%;
    position: absolute;
`

export const StyledMoonLoader = () => {
    return <MoonLoader
        css={styledLoader}
        size={80}
        color={"#123abc"}
    />
}

export const StyledPulseLoader = () => {
    return <PulseLoader
        css={styledLoaderUpdate}
        size={20}
        color={"#123abc"}
    />
}

export const StyledBeatLoader = () => {
    return <BeatLoader
        size={5}
        color={"white"}

    />
}