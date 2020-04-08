import React from "react"
import styled from "styled-components"
import { NavLink } from "./NavLink";

import { Link } from "@reach/router"
import TweetActions from "./TweetActions"


const Tweet = ({ isRetweeted, triggerFetch, isLiked, retweets, likes, retweet, tweetId, profileImg, imgSource, tweetContent, displayName, handle, timestamp }) => {




    return (

        <MainContainer>
            {/* Top section of tweet */}

            <RetweetContainer> {retweet}</RetweetContainer>
            <PaddingContainer>


                <ProfileImg src={profileImg} alt="profile-img" />
                <ContentContainer>
                    <TweetHeading>
                        <HandleAndDate>
                            <StyledLink to={`/users/${handle}`}><h3>{displayName}</h3></StyledLink>
                            <p>{handle}</p>
                            <p>- {timestamp}</p>
                        </HandleAndDate>
                    </TweetHeading>
                    <StyledLink to={`/tweet/${tweetId}`}>
                        <TweetContent>
                            <p>{tweetContent}</p>
                            <img src={imgSource} />
                        </TweetContent>
                    </StyledLink>
                    <TweetActions
                        retweets={retweets}
                        likes={likes}
                        /* handleLike={handleLike} */
                        tweetId={tweetId}
                        isLiked={isLiked}
                        triggerFetch={triggerFetch}
                        isRetweeted={isRetweeted}
                    />
                </ContentContainer>
            </PaddingContainer>

        </MainContainer>

    )
}

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color:black;

`

export const MainContainer = styled.div`

    width: 900px; 
    /* width: 100%;  */
    
    margin: 20px 0; 

    &:first-of-type{
        border-bottom: 1px solid #eeeeee;
    }
    
`
export const PaddingContainer = styled.div`
    padding-left: 30px;
    padding-top: 30px; 
    padding-bottom: 30px; 
    display: flex; 
    align-items: flex-start;
    
`
export const TweetHeading = styled.div`
    display: flex; 

`

export const HandleAndDate = styled.div`
        display: flex;
        width: 100%; 
        h3{
            font-weight: 700;
            padding-right: 10px; 

        }
        p{
            padding-right: 10px; 
            color: #808080;
        }
    `

export const TweetContent = styled.div`

margin-top: 10px; 


width: 100%; 

    p {
        max-width: 650px; 
    }
    
    img {
        border-radius: 10px; 
        margin: 10px 0; 
        max-width: 650px; 
    }
    

`

export const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    width: 500px; 
    
`
export const ProfileImg = styled.img`
    width: 50px;
    border-radius: 50%; 
    margin-right: 10px; 
`
const RetweetContainer = styled.div`
    position: relative; 
    left: 90px; 
    top: 15px; 
    font-size: .9rem;
    color: #50525A;
`

export default Tweet; 