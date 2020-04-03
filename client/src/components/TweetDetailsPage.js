import React from 'react'
import SingleTweet from "./SingleTweet"
import { PageContainer, ContentContainer } from './GlobalStyles';
import Sidebar from './Sidebar';
import styled from "styled-components"
import { Icon } from 'react-icons-kit';
import { chevronLeft } from 'react-icons-kit/feather/chevronLeft'
import { createHistory, Link } from "@reach/router"
import { StyledLink } from "./StyledLink"
import { StyledPulseLoader } from "./GlobalStyles"


// listen to the browser history


const TweetDetailsPage = ({ tweetId }) => {

    const [thisTweet, setThisTweet] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/tweet/${tweetId}`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThisTweet(data);
            })


            .catch(err => {
                console.log(err);
            });
    }, [tweetId])

    return (
        (thisTweet === null)
            ?
            (<StyledPulseLoader />)
            :
            (
                <>
                    <StyledBack>
                        {/* <StyledLink to={`/${history.location.origin}`}><button> <Icon icon={chevronLeft} />Back</button></StyledLink> */}
                        <button onClick={() => window.history.back()}> <Icon icon={chevronLeft} />Back</button>
                    </StyledBack>
                    <SingleTweet
                        profileImg={thisTweet.tweet.author.avatarSrc}
                        imgSource={

                            (thisTweet.tweet.media.length > 0)
                                ?
                                (thisTweet.tweet.media[0].url)
                                :
                                " "
                        }
                        tweetContent={thisTweet.tweet.status}
                        displayName={thisTweet.tweet.author.displayName}
                        handle={thisTweet.tweet.author.handle}
                        timestamp={thisTweet.tweet.timestamp}
                        retweets={
                            (thisTweet.tweet.numRetweets > 0)
                                ?
                                `${(thisTweet.tweet.numRetweets)}`
                                :
                                ""

                        }

                        likes={
                            (thisTweet.tweet.numLikes > 0)
                                ?
                                `${(thisTweet.tweet.numLikes)}`
                                :
                                ""


                        }

                    />
                </>
            )

    )
}


const StyledBack = styled.div`
    /* position: relative;  */
    width: 100%;
    top: 5px; 
    border-bottom: 1px solid #eeeeee; 
    
    button {
        border: none; 
        color: black; 
        font-weight: 700;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 10px 20px; 
    }
`

export default TweetDetailsPage;