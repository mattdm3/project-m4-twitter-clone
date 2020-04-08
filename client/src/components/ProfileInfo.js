import React from "react"
import styled from "styled-components"
import COLORS from "../constants"
import { Icon } from 'react-icons-kit';
import { calendar } from 'react-icons-kit/feather/calendar'
import { mapPin } from 'react-icons-kit/feather/mapPin'

const ProfileInfo = ({ description, headerImg, avatarImg, displayName, handle, followInfo, numFollowers, numFollowing, location, joinDate }) => {
    return (
        <ProfileContainer>
            <img src={headerImg} alt="header-image" />
            <AvatarContainer>
                <img src={avatarImg} alt="avatar-image" />
                <StyledButton>Edit Profile</StyledButton>
            </AvatarContainer>
            {/* STYLE HERE: */}
            <ProfileContent>

                <NameAndHandle>
                    <h2>{displayName}</h2>
                    <ProfileName>
                        <p>@{handle}</p>
                        {/* <span>{followInfo}</span> */}
                    </ProfileName>
                </NameAndHandle>

                <ProfileDescription>
                    <div>
                        {description}
                    </div>
                </ProfileDescription>

                <ProfileLocation>
                    <div>
                        <Icon icon={mapPin} /> {location}
                    </div>
                    <div>
                        <Icon icon={calendar} /> Joined {joinDate}
                    </div>
                </ProfileLocation>

                <FollowData>
                    <p> <span>{numFollowing}</span> Following</p>
                    <p> <span>{numFollowers}</span>  Followers</p>
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

    img {
        width: 900px; 
    }
`


const AvatarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 0 20px; 
    align-items: center;
    
    img {
        border-radius: 50%; 
        border: 2px solid white; 
        transform: translateY(-75px);
        width: 150px; 
    }
`

export const StyledButton = styled.button`
    width: 180px; 
    height: 45px; 
    padding: 10px 15px; 
    border-radius: 30px; 
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    background: ${COLORS.primary};
    cursor: pointer; 
`

// MAIN CONTENT CONTAINER 
const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px; 
    justify-content: space-between;
    height: 180px; 
    background: white;
`

const NameAndHandle = styled.div`
    h2 {
        font-weight: 700;
        margin-bottom: 5px; 
        font-size: 1.2rem;
    
    }
`

const ProfileName = styled.div` 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 180px; 
    
    p{
        color: #50525A;
    }
    span {
        background: #E8E9F0; 
        color: black;
        padding: 5px 8px; 
        line-height: 1;
        border-radius: 7px; 
        font-size: .8rem;
    }
`


const ProfileLocation = styled.div`
    display: flex; 
    
    width: 100%;
    color: #50525A;

    div{
        padding-right: 20px; 
    } 
`

const ProfileDescription = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 500px; 
`

const FollowData = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 180px; 

    span{
        font-weight: 700;
    }
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