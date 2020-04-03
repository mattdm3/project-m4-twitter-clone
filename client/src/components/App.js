import React from 'react';
import { Router } from "@reach/router"
import Bookmarks from "./Bookmarks"
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Profile from './ProfilePage';
import UserProfile from "./UserProfilePage"
import { CurrentUserContext } from './CurrentUserContext';
import { AllUserContext } from './AllUserContext'
import TweetDetailsPage from './TweetDetailsPage';
import Sidebar from "./Sidebar"
import { ContentContainer, PageContainer } from "./GlobalStyles"
import { StyledMoonLoader } from "./GlobalStyles"




function App({ setUpdateFeed }) {

  const { currentUser, status } = React.useContext(CurrentUserContext);
  const { feed, feedStatus } = React.useContext(AllUserContext);

  return (
    <div>


      {(status === "loading" || feedStatus === "loading") ?
        (
          <StyledMoonLoader

          />

        )
        :
        (
          <PageContainer>
            <Sidebar />
            <ContentContainer>
              <Router>
                <HomeFeed path="/" />
                <Notifications path="/notifications" />
                <Bookmarks path="/bookmarks" />
                <TweetDetailsPage path="/tweet/:tweetId" />
                <Profile path="/my-profile" />
                <UserProfile path="/users/:handle" />
              </Router>
            </ContentContainer>
          </PageContainer>

        )
      }


    </div>

  );
}

export default App;
