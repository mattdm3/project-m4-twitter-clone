import React from "react"
import styled from "styled-components"
import TweetActions from "./TweetActions"
import { StyledLink } from "./StyledLink"


export const MainContainer = styled.div`
    width: 900px; 
    height: 100vh;     
    margin-bottom: 20px;
    display: flex; 
    align-items: flex-start; 
`
export const PaddingContainer = styled.div`
    padding-left: 30px;
    padding-top: 30px; 
    padding-bottom: 30px; 
    display: flex; 
    align-items: flex-start; 
    /* align-items: center; */
    
`
export const HeadingContainer = styled.div`
    display: flex; 
    align-items: center;
`
export const TweetHeading = styled.div`
    display: flex; 

`
export const NameAndHandle = styled.div`
         /* display: flex; */
         width: 100%; 
        h3{
            font-weight: 700;

        }
        p{ 
          color: #50525A; 
        }
    `

export const TweetContent = styled.div`

margin: 20px 0; 
width: 100%; 
    img {
        border-radius: 10px; 
        margin: 10px 0; 
        max-width: 650px; 
    }
`
export const Title = styled.p`
    max-width: 650px; 
    font-size: 1.2rem;
`
export const TimeStamp = styled.p`
    font-size: .9rem; 
    color: grey; 
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


const SingleTweet = ({ isRetweeted, triggerFetch, isLiked, handleLike, likeAnimation, tweetId, likes, retweets, profileImg, imgSource, tweetContent, displayName, handle, timestamp }) => {



    return (
        <MainContainer>
            {/* Top section of tweet */}
            <PaddingContainer>
                {/* includes avatar image,  */}


                <ContentContainer>
                    {/* Display Name, Handle and Date and IMAGE */}
                    <StyledLink to={`/users/${handle}`}>
                        <HeadingContainer>
                            <ProfileImg src={profileImg} alt="profile-img" />
                            <NameAndHandle>
                                <h3>{displayName}</h3>
                                <p>@{handle}</p>
                            </NameAndHandle>
                        </HeadingContainer>
                    </StyledLink>

                    <TweetContent>
                        <Title>{tweetContent}</Title>
                        <img src={imgSource} />
                        <TimeStamp>{timestamp} - Critter Web App</TimeStamp>
                    </TweetContent>
                    <TweetActions
                        retweets={retweets}
                        likes={likes}
                        handleLike={handleLike}
                        likeAnimation={likeAnimation}
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
export default SingleTweet;