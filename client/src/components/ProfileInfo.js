import React from "react"
import styled from "styled-components"
import COLORS from "../constants"


import TweetActions from "./TweetActions"
import { ContentContainer } from "./GlobalStyles"

const ProfileInfo = () => {
    return (
        <ProfileContainer>
            <img src="https://placeimg.com/900/280/any" alt="" />
            <AvatarContainer>
                <img src="http://placecorgi.com/150" alt="" />
                <StyledButton>Edit Profile</StyledButton>
            </AvatarContainer>
            <ProfileContent>
                <NameAndHandle>
                    <h2>Name</h2>
                    <ProfileName>
                        <p>Handle</p> <p>Follows You</p>
                    </ProfileName>
                </NameAndHandle>

                <ProfileDescription>
                    <div>
                        Best friens with slkdjfls.
                    </div>
                </ProfileDescription>
                <ProfileLocation>
                    <div>
                        ICON Whitehall
                    </div>
                    <div>
                        ICON Joined February 2015
                    </div>

                </ProfileLocation>
                <FollowData>
                    <p>1 Following</p>
                    <p>1 Followers</p>
                </FollowData>
            </ProfileContent>
            <ProfileButtons>
                <button>
                    Tweets
                </button>
                <button>
                    Media
                </button>
                <button>
                    Likes
                </button>
            </ProfileButtons>

        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
    display: flex; 
    flex-direction: column;
`


const AvatarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 0 20px; 
    align-items: center;
    img {
        border-radius: 50%; 
        border: 2px solid white; 
        transform: translateY(-75px)
    }
`

const StyledButton = styled.button`
    width: 180px; 
    height: 45px; 
    padding: 10px 15px; 
    border-radius: 30px; 
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    background: ${COLORS.primary};
`

// MAIN CONTENT CONTAINER 
const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px; 
    justify-content: space-between;
    height: 140px; 
    background: white;
`

const NameAndHandle = styled.div`
    h2 {
        font-weight: 700;
        margin-bottom: 5px; 
    }
`

const ProfileName = styled.div` 
    display: flex; 
    justify-content: space-between;
    width: 150px; 
`
const ProfileLocation = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 300px; 
`

const ProfileDescription = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 300px; 
`

const FollowData = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 180px; 
`
// PROF BUTTONS

const ProfileButtons = styled.div`
    display: flex; 
    width: 100%; 


    button {
        flex-grow: grow;
        width: 100%; 
        height: 60px; 
        font-weight: 700; 
        font-size: 1.1rem; 
        color: grey;
        border: none;
        border-bottom: 1px solid grey; 
        background: white; 
        margin-top: 25px; 
    
    
    &:first-child {
        border-bottom: 1px solid ${COLORS.primary};
        color: ${COLORS.primary}; 
        }
    }

    
`



export default ProfileInfo;