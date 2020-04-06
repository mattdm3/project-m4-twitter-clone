import React from 'react'
import { CurrentUserContext } from './CurrentUserContext'
import ProfileInfo from "./ProfileInfo"
import Tweet from "./Tweet"
import { AllUserContext } from "./AllUserContext"
import {format} from "date-fns"
import { StyledMoonLoader } from "./GlobalStyles"


const Profile = () => {

    const { currentUser, status } = React.useContext(CurrentUserContext);
    const [thisUserTweets, setThisUserTweets] = React.useState(null);

    const [triggerFetch, setTriggerFetch] = React.useState("idle")

    React.useEffect(() => {
        fetch(`/api/${currentUser.profile.handle}/feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                setThisUserTweets(data);
                console.log(data)
            })
            .catch(err => {
                console.log(err);
                if(err){
                    window.location.href = "/error"
                }
            });
    }, [triggerFetch])

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
                joinDate={format(new Date(currentUser.profile.joined), "PPP")}
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
                                    triggerFetch={()=> (triggerFetch) ? setTriggerFetch(false) : setTriggerFetch(true)}
                                    isLiked={thisUserTweets.tweetsById[tweetId].isLiked}
                                        likes={
                                            (thisUserTweets.tweetsById[tweetId].numLikes > 0)
                                            ? 
                                            `${thisUserTweets.tweetsById[tweetId].numLikes}`
                                            : 
                                            ""
                                        }
                                        tweetId={tweetId}
                                        profileImg={thisUserTweets.tweetsById[tweetId].author.avatarSrc}
                                        displayName={thisUserTweets.tweetsById[tweetId].author.displayName}
                                        handle={thisUserTweets.tweetsById[tweetId].author.handle}
                                        timestamp={format(new Date(thisUserTweets.tweetsById[tweetId].timestamp), "LLL " + "do")}
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