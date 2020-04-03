import React from "react"
import ProfileInfo from "./ProfileInfo"
import { PageContainer, ContentContainer } from './GlobalStyles'
import { AllUserContext } from "./AllUserContext"
import Tweet from './Tweet'
import { user } from "react-icons-kit/feather/user";

import { StyledPulseLoader } from "./GlobalStyles"

const UserProfile = ({ handle }) => {

    const { feed, feedStatus } = React.useContext(AllUserContext);
    const [userTweets, setUserTweets] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${handle}/feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserTweets(data);
            })


            .catch(err => {
                console.log(err);
            });
    }, [handle])

    React.useEffect(() => {

        fetch(`/api/${handle}/profile`, {
            "method": "GET",
            "headers": {}

        })
            .then(res => res.json())
            .then(data => {
                setUserProfile(data);
                console.log(data);
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
                    <ProfileInfo
                        displayName={userProfile.profile.displayName}
                        handle={userProfile.profile.handle}
                        //followInfo={"follows you"} //ADD TERNARY
                        avatarImg={userProfile.profile.avatarSrc}
                        headerImg={userProfile.profile.bannerSrc}
                        description={userProfile.profile.bio}
                        numFollowers={userProfile.profile.numFollowers}
                        numFollowing={userProfile.profile.numFollowing}
                        location={userProfile.profile.location}
                        joinDate={userProfile.profile.joined}
                    />
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

                                <Tweet
                                    key={tweetId}
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
                            )
                        })
                    )
            }





        </>
    )
};

export default UserProfile;