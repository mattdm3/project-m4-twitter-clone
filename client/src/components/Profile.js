import React from 'react'
import Sidebar from "./Sidebar"
import { PageContainer, ContentContainer } from "./GlobalStyles"
import { CurrentUserContext } from './CurrentUserContext'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import ProfileInfo from "./ProfileInfo"
import Tweet from "./Tweet"
import { AllUserContext } from "./AllUserContext"

const styledLoader = css`
  margin-top: 20%; 
  margin-left: 55%; 
`

const Profile = () => {

    const { currentUser, status } = React.useContext(CurrentUserContext);
    const { feed, feedStatus } = React.useContext(AllUserContext);
    const [userTweets, setUserTweets] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${currentUser.profile.handle}/feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


            .catch(err => {
                console.log(err);
            });
    }, [])


    return (
        <PageContainer>
            <Sidebar />
            {(feedStatus === "loading" || status === "loading") ?
                (
                    <BeatLoader
                        css={styledLoader}
                        size={1}
                        color={"#123abc"}
                    />

                )
                :
                (
                    <ContentContainer style={{ left: "330px" }}>
                        <ProfileInfo />
                        <p>{currentUser.profile.handle}</p>
                        {feed.tweetIds.map((tweetId) => {


                            return (
                                <div key={tweetId}>
                                    <Tweet
                                        displayName={feed.tweetsById[tweetId].author.displayName}
                                        handle={feed.tweetsById[tweetId].author.handle}
                                        timestamp={feed.tweetsById[tweetId].timestamp}
                                        tweetContent={feed.tweetsById[tweetId].status}
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
                    </ContentContainer>
                )
            }
        </PageContainer>
    )


};

export default Profile;