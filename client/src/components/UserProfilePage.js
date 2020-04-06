import React from "react"
import ProfileInfo from "./ProfileInfo"
import { PageContainer, ContentContainer } from './GlobalStyles'
import { AllUserContext } from "./AllUserContext"
import Tweet from './Tweet'
import { user } from "react-icons-kit/feather/user";
import styled from "styled-components";
import { StyledPulseLoader } from "./GlobalStyles"

const UserProfile = ({ handle }) => {

    const {feed, feedStatus } = React.useContext(AllUserContext);
    const [userTweets, setUserTweets] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState(null);

    const [triggerFetch, setTriggerFetch] = React.useState(false);

    React.useEffect(() => {
        fetch(`/api/${handle}/feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserTweets(data);
            })


            .catch(err => {
                console.log(err);
            });
    }, [handle, triggerFetch])

    React.useEffect(() => {

        fetch(`/api/${handle}/profile`, {
            "method": "GET",
            "headers": {}

        })
            .then(res => res.json())
            .then(data => {
                setUserProfile(data);
                
        
            })

            .catch(err => {
                console.log(err)
            })
        


    }, [handle])

    return (
        <>
            {(userProfile === null)
                ?
                (<StyledPulseLoader />)
                :
                (
                    <div>


                        <ProfileInfo
                            displayName={userProfile.profile.displayName}
                            handle={userProfile.profile.handle}
                            avatarImg={userProfile.profile.avatarSrc}
                            headerImg={userProfile.profile.bannerSrc}
                            description={userProfile.profile.bio}
                            numFollowers={userProfile.profile.numFollowers}
                            numFollowing={userProfile.profile.numFollowing}
                            location={userProfile.profile.location}
                            joinDate={userProfile.profile.joined}

                            followInfo={

                                (userProfile.profile.isFollowingYou)
                                    ?
                                    "Follows You"
                                    :
                                    ""
                            }
                        />
                        <PositionedFollowInfo style={(userProfile.profile.isFollowingYou)
                            ?
                            { background: "#E8E9F0" }
                            :
                            { background: "transparent" }

                        }>{
                                (userProfile.profile.isFollowingYou)
                                    ?
                                    "Follows You"
                                    :
                                    ""
                            }</PositionedFollowInfo>
                    </div>
                )
            }
            {
                (userTweets === null)
                    ?
                    (<StyledPulseLoader />)
                    :
                    (
                        userTweets.tweetIds.map((tweetId) => {
                            
                           
                            return (

                                <div key={tweetId}>
                                    <Tweet
                                    triggerFetch={()=> triggerFetch ? setTriggerFetch(false) : setTriggerFetch(true)}
                                    likes={
                                            (userTweets.tweetsById[tweetId].numLikes > 0)
                                            ? 
                                            `${userTweets.tweetsById[tweetId].numLikes}`
                                            : 
                                            ""
                                        }

                                        isLiked={userTweets.tweetsById[tweetId].isLiked}
                                      
                                        tweetId={tweetId}
                                        profileImg={userTweets.tweetsById[tweetId].author.avatarSrc}
                                        displayName={userTweets.tweetsById[tweetId].author.displayName}
                                        handle={userTweets.tweetsById[tweetId].author.handle}
                                        timestamp={userTweets.tweetsById[tweetId].timestamp}
                                        tweetContent={userTweets.tweetsById[tweetId].status}
                                        imgSource={
                                            (userTweets.tweetsById[tweetId].media.length > 0)
                                                ?
                                                `${userTweets.tweetsById[tweetId].media[0].url}`
                                                :
                                                ""
                                        }
                                    />
                                    </div>
                            )
                        })
                    )
            }





        </>
    )
};

const PositionedFollowInfo = styled.p`
    position: relative; 
    bottom: 242px;
    left: 120px; 
    background: #E8E9F0; 
    color: black;
    padding: 4px 5px; 
    border-radius: 7px; 
    font-size: .7rem;
    width: fit-content; 

`



export default UserProfile;