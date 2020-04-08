import React from 'react'
import { CurrentUserContext } from './CurrentUserContext'
import Tweet from "./Tweet"
import styled from 'styled-components'
import { AllUserContext } from './AllUserContext'
import TweetPoster from "./TweetPoster"
import { Icon } from 'react-icons-kit';
import { repeat } from 'react-icons-kit/feather/repeat'
import { format } from 'date-fns'
import ProfileInfo from './ProfileInfo'

const StyledIcon = styled(Icon)`
    margin-right: 10px; 
`



const ProfilePageNew = () => {

    // const { currentUser, status } = React.useContext(CurrentUserContext);
    const {  feed, feedStatus, setUpdateFeed, updateFeed } = React.useContext(AllUserContext);


    const {currentUser} = React.useContext(CurrentUserContext);





    const setUpdateFeedTrigger = () => {
        if (updateFeed === true) {
            setUpdateFeed(false)
        } else setUpdateFeed(true);

    }

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
            
            {feed.tweetIds.map((tweetId) => {
                return (
                    <div key={tweetId}>
                        <Tweet
                            isRetweeted={feed.tweetsById[tweetId].isRetweeted}
                            triggerFetch={setUpdateFeedTrigger}
                            isLiked={feed.tweetsById[tweetId].isLiked}

                            retweet={
                                (feed.tweetsById[tweetId].retweetFrom)
                                    ?
                                    (
                                        <div>
                                            <StyledIcon icon={repeat} />
                                            {feed.tweetsById[tweetId].retweetFrom.displayName}
                                        </div>
                                    )
                                    :
                                    ""

                            }
                            tweetId={tweetId}
                            profileImg={feed.tweetsById[tweetId].author.avatarSrc}
                            displayName={feed.tweetsById[tweetId].author.displayName}
                            handle={feed.tweetsById[tweetId].author.handle}


                            timestamp={format(new Date(feed.tweetsById[tweetId].timestamp), "LLL " + "do")}
                            tweetContent={feed.tweetsById[tweetId].status}
                            retweets={
                                (feed.tweetsById[tweetId].numRetweets > 0)
                                    ?
                                    `${(feed.tweetsById[tweetId].numRetweets)}`
                                    :
                                    ""

                            }


                            likes={
                                (feed.tweetsById[tweetId].numLikes > 0)
                                    ?
                                    `${(feed.tweetsById[tweetId].numLikes)}`
                                    :
                                    ""


                            }

                            imgSource={
                                (feed.tweetsById[tweetId].media.length > 0)
                                    ?
                                    `${feed.tweetsById[tweetId].media[0].url}`
                                    :
                                    ""
                            }
                        />
                    </div>
                )
            })}
        </>

    )
}





export default ProfilePageNew;