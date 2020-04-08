import React from 'react';
import { Router } from "@reach/router"
import Bookmarks from "./Bookmarks"
import HomeFeed from './HomeFeed';
import ProfilePage from './ProfilePage';
import UserProfilePage from "./UserProfilePage"
import { CurrentUserContext } from './CurrentUserContext';
import { AllUserContext } from './AllUserContext'
import TweetDetailsPage from './TweetDetailsPage';
import Sidebar from "./Sidebar"
import { ContentContainer, PageContainer } from "./GlobalStyles"
import { StyledMoonLoader } from "./GlobalStyles"
import Error from "./Error"
import StretchGoal from './StretchGoalPage';
import ProfilePageNew from './ProfilePageNew';



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
                <StretchGoal path="/stretchgoal" />
                <Bookmarks path="/bookmarks" />
                <TweetDetailsPage path="/tweet/:tweetId" />
                <ProfilePageNew path="/my-profile" />
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
