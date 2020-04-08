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
import { AllUserContext } from "./AllUserContext"
import { format } from 'date-fns'

// listen to the browser history


const TweetDetailsPage = ({ tweetId }) => {

    const [thisTweet, setThisTweet] = React.useState(null);

    const [triggerFetch, setTriggerFetch] = React.useState(false);


    React.useEffect(() => {
        fetch(`/api/tweet/${tweetId}`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                setThisTweet(data);
                // console.log(data)
            })

            .catch(err => {
                console.log(err); 
                if(err){
                    window.location.href = "/error"
                }
            });
    }, [tweetId, triggerFetch])

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
                        isRetweeted={thisTweet.tweet.isRetweeted}
                        triggerFetch={()=> triggerFetch ? setTriggerFetch(false) : setTriggerFetch(true)}
                        isLiked={thisTweet.tweet.isLiked}
                        tweetId={thisTweet.tweet.id}
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
                        timestamp={format(new Date(thisTweet.tweet.timestamp), "p - " + "PPP " )}
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