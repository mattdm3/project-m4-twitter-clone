import React from 'react'
import { CurrentUserContext } from './CurrentUserContext'
import ProfileInfo from "./ProfileInfo"
import Tweet from "./Tweet"
import { AllUserContext } from "./AllUserContext"
import { format } from "date-fns"
import { StyledMoonLoader } from "./GlobalStyles"


const Profile = () => {

    

    // React.useEffect(() => {
    //     fetch("/api/me/profile", {
    //         "method": "GET",
    //         "headers": {}
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setCurrentUser(data);
    //             // setStatus("idle");
    //             loadUserFeed();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             if(err){
    //                 // window.location.href = "/error"
    //                 console.log("error")
    //                 // (triggerFetch) ? setTriggerFetch(false) : setTriggerFetch(true)
                    
    //             }
    //         });
    // }, [triggerFetch])


  

    // const loadUserFeed = () => {

    //     if(currentUser != null) {
    //         fetch(`/api/${currentUser.profile.handle}/feed`, {
    //             "method": "GET",
    //             "headers": {}
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setThisUserTweets(data);
    //                 console.log(data)
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //                 if (err) {
    //                     // window.location.href = "/error"
    //                     console.log("there was a problem");
    //                     (triggerFetch) ? setTriggerFetch(false) : setTriggerFetch(true)

    //                 }
    //             });
        
    //     }
    //     else {(triggerFetch) ? setTriggerFetch(false) : setTriggerFetch(true)}; 

        
    // }

   
       
    
    
    // React.useEffect(() => {

    //     // console.log(currentUser)
    //     if(currentUser != null) {
    //         fetch(`/api/${currentUser.profile.handle}/feed`, {
    //             "method": "GET",
    //             "headers": {}
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setThisUserTweets(data);
    //                 // console.log(data)
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //                 if (err) {
    //                     // window.location.href = "/error"
    //                     console.log("there was a problem")
    //                 }
    //             });
        
    //     }
    //     else {console.log("not loading")}; 


        
    // }, [triggerFetch, currentUser])


     //this gets current user profile info 
     const { currentUser, userTweets, setUpdateCurrentUserFeed, updateCurrentUserFeed} = React.useContext(CurrentUserContext);

     // const [currentUser, setCurrentUser] = React.useState(null);
    //  const [thisUserTweets, setThisUserTweets] = React.useState(null);
 
    //  const [triggerFetch, setTriggerFetch] = React.useState(false)
     console.log(currentUser);
 
 

    //  const setUpdateFeedTrigger = () => {
    //     //  setTimeout(()=> {
    //         if (updateCurrentUserFeed === true) {
    //             setUpdateCurrentUserFeed(false)
    //         } else setUpdateCurrentUserFeed(true);

    //     //  }, 500)

        

    //  }

     const { feed, feedStatus, setUpdateFeed, updateFeed } = React.useContext(AllUserContext);




    const setUpdateFeedTrigger = () => {
        if (updateFeed === true) {
            setUpdateFeed(false)
        } else setUpdateFeed(true);

    }



     

    return (
        <>
        {(currentUser !== null) &&
            <ProfileInfo
                handle={currentUser.profile.handle}
                displayName={currentUser.profile.displayName}
                //followInfo={"follows you"} //ADD TERNARY
                avatarImg={currentUser.profile.avatarSrc}
                headerImg={currentUser.profile.bannerSrc}
                description={currentUser.profile.bio}
                numFollowers={currentUser.profile.numFollowers}
                numFollowing={currentUser.profile.numFollowing}
                location={currentUser.profile.location}
                joinDate={format(new Date(currentUser.profile.joined), "PPP")}
            />}
            {
                (userTweets === null)
                    ?
                    (<StyledMoonLoader />)
                    :
                    (
                        userTweets.tweetIds.map((tweetId) => {
                            
                            return (
                                <div key={tweetId}>
                                    <Tweet
                                        triggerFetch={setUpdateFeedTrigger} 
                                        isRetweeted={userTweets.tweetsById[tweetId].isRetweeted}
                                        isLiked={userTweets.tweetsById[tweetId].isLiked}
                                        likes={
                                            (userTweets.tweetsById[tweetId].numLikes > 0)
                                                ?
                                                `${userTweets.tweetsById[tweetId].numLikes}`
                                                :
                                                ""
                                        }
                                        tweetId={tweetId}
                                        profileImg={userTweets.tweetsById[tweetId].author.avatarSrc}
                                        displayName={userTweets.tweetsById[tweetId].author.displayName}
                                        handle={userTweets.tweetsById[tweetId].author.handle}
                                        timestamp={format(new Date(userTweets.tweetsById[tweetId].timestamp), "LLL " + "do")}
                                        tweetContent={userTweets.tweetsById[tweetId].status}
                                        retweets ={
                                            (userTweets.tweetsById[tweetId].numRetweets > 0) 
                                            ? 
                                                `${(userTweets.tweetsById[tweetId].numRetweets)}`
                                            :
                                            ""


                                        }
                                        imgSource={
                                            (userTweets.tweetsById[tweetId].media.length > 0)
                                                ?
                                                `${userTweets.tweetsById[tweetId].media[0].url}`
                                                :
                                                ""
                                        }
                                    />
                                </div>
                            )
                        })
                    )
            }
        </>
    )


};

export default Profile;