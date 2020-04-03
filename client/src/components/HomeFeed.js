import React from 'react'
import { CurrentUserContext } from './CurrentUserContext'
import Tweet from "./Tweet"
import styled from 'styled-components'
import { AllUserContext } from './AllUserContext'
import TweetPoster from "./TweetPoster"
import { Icon } from 'react-icons-kit';
import { repeat } from 'react-icons-kit/feather/repeat'


const StyledIcon = styled(Icon)`
    margin-right: 10px; 
`



const HomeFeed = () => {

    // const { currentUser, status } = React.useContext(CurrentUserContext);
    const { feed, feedStatus, setUpdateFeed, updateFeed } = React.useContext(AllUserContext);

    const setUpdateFeedTrigger = () => {
        if (updateFeed === true) {
            setUpdateFeed(false)
        } else setUpdateFeed(true)

    }

    return (
        <>
            <TweetPoster
                setUpdateFeed={setUpdateFeedTrigger}
            />
            {feed.tweetIds.map((tweetId) => {
                return (
                    <div key={tweetId}>
                        <Tweet
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
                            timestamp={feed.tweetsById[tweetId].timestamp}
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





export default HomeFeed;