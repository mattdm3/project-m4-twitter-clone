import React from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from './CurrentUserContext';
import { styledButton, StyledButton } from './ProfileInfo'
import { AllUserContext } from './AllUserContext'
import { StyledBeatLoader } from "./GlobalStyles"



const TweetPoster = () => {

    const { currentUser, status } = React.useContext(CurrentUserContext);
    const { setUpdateFeed, updateFeed } = React.useContext(AllUserContext);

    const [counter, setCounter] = React.useState(280);
    const [tweetText, setTweetText] = React.useState("");
    const [tweetStatus, setTweetStatus] = React.useState("idle");

    const [placeHolder, setPlaceHolder] = React.useState("What's Happening?")


    const handleChange = (e) => {
        setCounter(280 - e.target.value.length);
        setTweetText(e.target.value);
    }

    const checkInput = () => {
        if (tweetText.length > 0 && tweetText.length < 280) {
            handleTweetSubmit();
            setPlaceHolder("What's Happening?")
        } else if (tweetText.lenght < 280) {
            setTweetStatus("too-long");
        } else if (tweetText.length === 0) {
            setPlaceHolder("Can't Meow Without Saying Something")
        }
    }


    const setUpdateFeedTrigger = () => {
        setTweetText("");
        if (updateFeed === true) {
            setUpdateFeed(false)
        } else setUpdateFeed(true);

        setTimeout(() => {
            setTweetStatus("idle");
        }, 700)

    }

    const handleTweetSubmit = () => {


        setTweetStatus("loading");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: `${tweetText}` })
        };
        fetch('/api/tweet', requestOptions)
            .then(response => response.json())
            .then(() => setUpdateFeedTrigger())




    }




    return (
        <TweetBox>
            <h2>Home</h2>
            <InputContainer>
                <Avatar src={currentUser.profile.avatarSrc} alt="avatar" />
                <StyledInput value={tweetText} placeholder={placeHolder} onChange={handleChange} type="text" />
            </InputContainer>

            <ButtonContainer>
                <p style={counter < 0 ? { color: "red" } : { color: "black" }}>{counter}</p>
                <StyledButton onClick={checkInput}>
                    {
                        (tweetStatus == "loading")
                            ?
                            (<StyledBeatLoader />)
                            :
                            (

                                (tweetStatus == "too-long")
                                    ?
                                    ("Tweet too long!")
                                    :
                                    ("Meow")
                            )
                    }
                </StyledButton>
            </ButtonContainer>

        </TweetBox>
    )
}

const ButtonContainer = styled.div`
    position: relative; 
    right: -500px; 
    top: 80px; 
    display: flex; 
    width: 240px; 
    align-items: center;
    justify-content: space-between;
    
`

const TweetBox = styled.div`
    position: relative; 
    height: 250px; 
    left: 0px; 
    border-bottom: 1px solid #eeeeee;
    width: 100%; 
    

    h2{
        font-weight: 700; 
        font-size: 1.2rem; 
        padding: 15px;
        padding-left: 0; 
        border-bottom: 1px solid #EEEEEE; 
        position: relative; 
        padding-left: 20px; 
    }
`

const StyledInput = styled.textarea`
    width: 650px; 
    height: 120px; 
    position: absolute;
    left: 75px; 
    border: none;
    font-size: 1.2rem;
    padding-left: 20px; 
    resize: none; 

    &:focus {
        outline: none; 
    }

    &:placeholder{
        color: #eeeeee;
    }

    
`

const InputContainer = styled.div`
    display: flex;
    padding-top: 15px; 
    padding-left: 15px; 
    
`

const Avatar = styled.img`
    width: 50px;
    height: 50px; 
    border-radius: 50%;  
`
export default TweetPoster