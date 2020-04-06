import React from 'react';
import { Router } from "@reach/router"
import Bookmarks from "./Bookmarks"
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import ProfilePage from './ProfilePage';
import UserProfilePage from "./UserProfilePage"
import { CurrentUserContext } from './CurrentUserContext';
import { AllUserContext } from './AllUserContext'
import TweetDetailsPage from './TweetDetailsPage';
import Sidebar from "./Sidebar"
import { ContentContainer, PageContainer } from "./GlobalStyles"
import { StyledMoonLoader } from "./GlobalStyles"
import Error from "./Error"



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
                <ProfilePage path="/my-profile" />
                <UserProfilePage path="/users/:handle" />
                <Error default />
              </Router>
            </ContentContainer>
          </PageContainer>

        )
      }


    </div>

  );
}

export default App;
