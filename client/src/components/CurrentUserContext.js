import React from "react"
import { set } from "date-fns/esm";

export const CurrentUserContext = React.createContext(null)

export const CurrentUserProvider = ({ children }) => {


    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");
    const [feedStatus, setFeedStatus] = React.useState("idle");

    const [userTweets, setUserTweets] = React.useState(null);
    const [updateCurrentUserFeed, setUpdateCurrentUserFeed] = React.useState(true)

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    React.useEffect(() => {
        fetch("/api/me/profile", {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data);
                setStatus("idle");
            })
            .catch(err => {
                console.log(err);
                // if(err){
                //     window.location.href = "/error"
                // }
            });
    }, [status])

    React.useEffect(() => {
        setFeedStatus("loading");

        fetch("/api/me/home-feed", {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                setUserTweets(data);
                setFeedStatus("loaded")
                
            })
            .catch(err => {
                console.log(err);
                
                
                // if(err){
                //     window.location.href = "/error"
                // }
            });
    }, [updateCurrentUserFeed])

    

    return (
        <CurrentUserContext.Provider value={{ feedStatus, currentUser, setStatus, userTweets, updateCurrentUserFeed, setUpdateCurrentUserFeed }}>
            {children}
        </CurrentUserContext.Provider>
    )


}
