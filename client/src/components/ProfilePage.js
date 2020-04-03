import React from 'react'
import { CurrentUserContext } from './CurrentUserContext'
import ProfileInfo from "./ProfileInfo"
import Tweet from "./Tweet"
import { AllUserContext } from "./AllUserContext"

import { StyledMoonLoader } from "./GlobalStyles"


const Profile = () => {

    const { currentUser, status } = React.useContext(CurrentUserContext);
    const { feed, feedStatus } = React.useContext(AllUserContext);
    const [thisUserTweets, setThisUserTweets] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${currentUser.profile.handle}/feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThisUserTweets(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <ProfileInfo
                handle={currentUser.profile.handle}
                displayName={currentUser.profile.displayName}
                //followInfo={"follows you"} //ADD TERNARY
                avatarImg={currentUser.profile.avatarSrc}
                headerImg={currentUser.profile.bannerSrc}
                description={currentUser.profile.bio}
                numFollowers={currentUser.profile.numFollowers}
                numFollowing={currentUser.profile.numFollowing}
                location={currentUser.profile.location}
                joinDate={currentUser.profile.joined}
            />
            {
                (thisUserTweets === null)
                    ?
                    (<StyledMoonLoader />)
                    :
                    (
                        thisUserTweets.tweetIds.map((tweetId) => {
                            return (
                                <div key={tweetId}>
                                    <Tweet
                                        tweetId={tweetId}
                                        profileImg={thisUserTweets.tweetsById[tweetId].author.avatarSrc}
                                        displayName={thisUserTweets.tweetsById[tweetId].author.displayName}
                                        handle={thisUserTweets.tweetsById[tweetId].author.handle}
                                        timestamp={thisUserTweets.tweetsById[tweetId].timestamp}
                                        tweetContent={thisUserTweets.tweetsById[tweetId].status}
                                        imgSource={
                                            (thisUserTweets.tweetsById[tweetId].media.length > 0)
                                                ?
                                                `${thisUserTweets.tweetsById[tweetId].media[0].url}`
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

export default Profile;