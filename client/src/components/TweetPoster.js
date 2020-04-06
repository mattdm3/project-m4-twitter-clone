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



    const handleChange = (e) => {
        setCounter(280 - e.target.value.length);
        setTweetText(e.target.value);
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
                <StyledInput value={tweetText} placeholder="What's Happening?" onChange={handleChange} type="text" />
            </InputContainer>

            <ButtonContainer>
                <p>{counter}</p>
                <StyledButton onClick={handleTweetSubmit}>
                    {
                        (tweetStatus == "loading")
                            ?
                            (<StyledBeatLoader />)
                            :
                            ("Meow")

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
    border-radius: 50%;  
`
export default TweetPoster