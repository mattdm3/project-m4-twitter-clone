import React from "react"
import styled from "styled-components"

import TweetActions from "./TweetActions"

const Tweet = ({ imgSource, tweetContent, displayName, handle, timestamp }) => {
    return (
        <MainContainer>
            {/* Top section of tweet */}
            <ProfileImg src="http://placecorgi.com/50" alt="" />
            <ContentContainer>
                <TweetHeading>
                    <HandleAndDate>
                        <h3>{displayName}</h3>
                        <p>{handle}</p>
                        <p>- {timestamp}</p>
                    </HandleAndDate>
                </TweetHeading>
                <TweetContent>
                    <p>{tweetContent}</p>
                    <img src={imgSource} />
                </TweetContent>

                <TweetActions />
            </ContentContainer>

        </MainContainer>
    )
}

const MainContainer = styled.div`
    padding: 10px; 
    width: 100%; 
    display: flex; 
    align-items: flex-start;
    margin: 20px 0; 
    
`
const TweetHeading = styled.div`
    display: flex; 

`

const HandleAndDate = styled.div`
        display: flex;
        width: 450px; 
        justify-content: space-between;
        h3{
            font-weight: 700;

        }
    `

const TweetContent = styled.div`

margin-top: 10px; 


width: 100%; 

    p {
        max-width: 650px; 
    }
    
    img {
        border-radius: 10px; 
        margin: 10px 0; 
        max-width: 550px; 
    }
    

`

const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    
`
const ProfileImg = styled.img`
    width: 50px;
    border-radius: 50%; 
    margin-right: 10px; 
`

export default Tweet; 