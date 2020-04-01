import React from 'react';

import { Router } from "@reach/router"
import Bookmarks from "./Bookmarks"
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import TweetDetails from './TweetDetails';
import Profile from './Profile';
import { CurrentUserContext } from './CurrentUserContext';
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { AllUserContext } from './AllUserContext'

const styledLoader = css`
  margin: 0 auto; 
  margin-top: 25%; 
  
`

function App() {

  const { currentUser, status } = React.useContext(CurrentUserContext);
  const { feed, feedStatus } = React.useContext(AllUserContext);

  return (
    <div>
      {(status === "loading" && feedStatus === "loading") ?
        (
          <MoonLoader
            css={styledLoader}
            size={80}
            color={"#123abc"}
          />

        )
        :
        (
          <Router>
            <HomeFeed path="/" />
            <Notifications path="/notifications" />
            <Bookmarks path="/bookmarks" />
            <TweetDetails path="/tweet/:tweetId" />
            <Profile path="/my-profile" />
          </Router>
        )



      }
    </div >

  );
}

export default App;
