import React from "react"
import styled, { keyframes } from 'styled-components'
import { messageCircle } from 'react-icons-kit/feather/messageCircle'
import { Icon } from 'react-icons-kit';
import { repeat } from 'react-icons-kit/feather/repeat'
import { heart } from 'react-icons-kit/feather/heart'
import { share } from 'react-icons-kit/feather/share'
// import { heart } from 'react-icons-kit/ionicons/heart'
import { useSpring, animated } from 'react-spring'
import { AllUserContext } from "./AllUserContext"
import HeartSVG from "./HeartSVG"
import { FiHeart } from "react-icons/fi";


const TweetActions2 = ({  handleLike, likeAnimation, reRenderFeed, tweetId, retweets, likes }) => {

    // const [likeAnimation, setLikeAnimation] = React.useState(false)
    // const { feed, setUpdateFeed, updateFeed } = React.useContext(AllUserContext);

    // const reRenderFeed = () => {
    //     if (updateFeed) {
    //         setUpdateFeed(false)
    //     } else setUpdateFeed(true)
    // }


    // const handleLike = (e) => {
    //     (likeAnimation ? setLikeAnimation(false) : setLikeAnimation(true));

    //     if (feed.tweetsById[tweetId].isLiked) {

    //         fetch(`/api/tweet/${tweetId}/like`, {
    //             "method": "PUT",
    //             "headers": {
    //                 "content-type": "application/json"
    //             },
    //             "body": JSON.stringify({
    //                 "like": false
    //             })
    //         })
    //             .then(response => {
    //                 reRenderFeed();
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     } else {
    //         fetch(`/api/tweet/${tweetId}/like`, {
    //             "method": "PUT",
    //             "headers": {
    //                 "content-type": "application/json"
    //             },
    //             "body": JSON.stringify({
    //                 "like": true
    //             })
    //         })
    //             .then(response => {
    //                 reRenderFeed();
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }



    // }


    // const springyHeart = useSpring({
    //     transform: 'scale(2)',
    //     from: {
    //       transform: 'scale(0)',
    //     },
    //     config: {
    //       tension: 200,
    //       friction: 12,
    //     },
    // })



    return (
        <StyledActions>
            <StyledIcon icon={messageCircle} />
            <div>
                <StyledIcon icon={repeat} />
                {retweets}
            </div>
            <div style={{ position: "relative", cursor: "pointer" }}>
              
                <Foreground onClick={handleLike}>
        

                    { 
                        likeAnimation ?
                        (          
                                <SpringyHeart>
                                     <StyledHeart style={{fill: "red", stroke: "red"}} 
                                        />
                                  </SpringyHeart> )
                        :
                        (
                             likes > 0 || likeAnimation ?
                            (
                                <StyledHeart  style={{fill: "red", stroke: "red"}} />  
                            )
                            : 
                            (   
                                <StyledHeart  style={{fill:"white"}} /> 
                            )
                            
                        )


                    }                         
                    
                </Foreground>

                <Background>
                    {likeAnimation && <PoppingCircle />}
                    <p  style={{ position: "absolute", left: "35px", top: "10px" }}>{likes}</p>
                </Background>

            </div>

            <StyledIcon icon={share} />

        </StyledActions>
    )
}


const Foreground = styled.div`
    position: relative; 
    z-index: 1; 
`

const Background = styled.div`
    position: absolute; 
    z-index: 0; 
    display: flex; 
`

const scale = keyframes`
    0% {
        transform: scale(0);

    }
    50% {
        transform: scale(1.8); 
       
    }
    100% {
        transform: scale(0)
    }

`

const scaleHeart = keyframes`
    0% {
        transform: scale(1);

    }
    50% {
        transform: scale(1.8); 
    
    }
    100% {
        transform: scale(1)
    }
`


const fade = keyframes`
    from {
        opacity: 0;
    }
    to {

        opacity: 1; 
    }

`

const PoppingCircle = styled.div`
    display: block; 
    border-radius: 50%; 
    animation: ${fade} 800ms ease-in forwards, ${scale} 800ms ease-out forwards; 
    color: red; 
    width: 35px;
    height: 35px; 
    background: #FAE9EC; 

    &:hover {
        background: #FAE9EC; 
        padding: 9px; 
        border-radius: 50%; 
    }
`


const StyledActions = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 75%; 

    div {
        display: flex; 
        justify-content: space-between;
        /* width: 35px;  */
        
    }
    
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
    padding: 9px;

    
`

// const stylesAnimationHeart = {
//     "color": "green" 
// }

const SpringyHeart = styled.div`
    animation: ${scaleHeart} 800ms ease-in-out forwards;
    
`

const StyledHeart = styled(FiHeart)`
    cursor: pointer; 
    padding: 9px; 
    border-radius: 50%; 
    /* z-index: 4;  */
    color: grey; 
    transition-duration: 300ms; 
    /* animation: ${scaleHeart} 800ms ease-out forwards;  */
    

    &:hover {
        background: #FAE9EC; 
        padding: 9px; 
        border-radius: 50%; 
        transition-duration: 200ms; 
    }

`


export default TweetActions2; 