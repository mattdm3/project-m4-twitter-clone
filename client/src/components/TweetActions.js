import React from "react"
import styled from 'styled-components'
import { messageCircle } from 'react-icons-kit/feather/messageCircle'
import { Icon } from 'react-icons-kit';
import { repeat } from 'react-icons-kit/feather/repeat'
import { heart } from 'react-icons-kit/feather/heart'
import { share } from 'react-icons-kit/feather/share'




const TweetActions = ({ retweets, likes }) => {


    return (
        <StyledActions>
            <StyledIcon icon={messageCircle} />
            <div>
                <StyledIcon icon={repeat} />
                {retweets}
            </div>
            <div>
                <StyledIcon icon={heart} />
                {likes}
            </div>

            <StyledIcon icon={share} />
        </StyledActions>
    )
}

const StyledActions = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 75%; 

    div {
        display: flex; 
        justify-content: space-between;
        width: 35px; 
        
    }
    
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
`

export default TweetActions; 