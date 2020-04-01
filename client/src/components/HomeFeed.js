import React from 'react'
import Sidebar from "./Sidebar"
import { CurrentUserContext } from './CurrentUserContext'
import Tweet from "./Tweet"
import styled from 'styled-components'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { ContentContainer, PageContainer } from "./GlobalStyles"
import { AllUserContext } from './AllUserContext'

const HomeFeed = () => {

    const { currentUser, status } = React.useContext(CurrentUserContext);
    const { feed, feedStatus } = React.useContext(AllUserContext);

    // return (
    //     <PageContainer>
    //         <Sidebar />

    //         {(feedStatus === "loading") ?

    //             (
    //                 <BeatLoader
    //                     css={styledLoader}
    //                     size={50}
    //                     color={"#123abc"}
    //                 />

    //             )


    //             :

    //             (
    //                 <ContentContainer>
    //                     {feed.tweetIds.map((tweetId) => {
    //                         return (
    //                             <div key={tweetId}>
    //                                 <Tweet
    //                                     displayName={feed.tweetsById[tweetId].author.displayName}
    //                                     handle={feed.tweetsById[tweetId].author.handle}
    //                                     timestamp={feed.tweetsById[tweetId].timestamp}
    //                                     tweetContent={feed.tweetsById[tweetId].status}
    //                                     imgSource={
    //                                         (feed.tweetsById[tweetId].media.length > 0)
    //                                             ?
    //                                             `${feed.tweetsById[tweetId].media[0].url}`
    //                                             :
    //                                             ""
    //                                     }
    //                                 />
    //                             </div>
    //                         )

    //                     })}


    //                     {/* <Tweet profileName={}/> */}
    //                 </ContentContainer>

    //             )


    //         }



    //     </PageContainer>
    // )

    return (
        <PageContainer>
            <Sidebar />
            <ContentContainer>
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

const styledLoader = css`
  margin: 0 auto; 
  margin-top: 20%; 
  margin-left: 55%; 
`





export default HomeFeed;