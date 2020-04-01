import React from "react"
import styled from 'styled-components'
import { messageCircle } from 'react-icons-kit/feather/messageCircle'
import { Icon } from 'react-icons-kit';
import { repeat } from 'react-icons-kit/feather/repeat'
import { heart } from 'react-icons-kit/feather/heart'
import { share } from 'react-icons-kit/feather/share'


const TweetActions = () => {
    return (
        <StyledActions>
            <Icon icon={messageCircle} />
            <Icon icon={repeat} />
            <Icon icon={heart} />
            <Icon icon={share} />
        </StyledActions>
    )
}

const StyledActions = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 75%; 
`

export default TweetActions; 