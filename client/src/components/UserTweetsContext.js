import React, { Children } from 'react'
import { CurrentUserContext } from './CurrentUserContext';



export const UserTweetsContext = React.createContext(null);

export const UserTweetsProvider = ({ children }) => {

    const { currentUser, status } = React.useContext(CurrentUserContext);


    const [userTweets, setUserTweets] = React.useState(null);




    React.useEffect(() => {

        fetch(`/api/${currentUser.profile.handle}/feed`, {
            "method": "GET",
            "headers": {}

        })
            .then(res => res.json())
            .then(data => {
                setUserTweets(data)
            })
            .cath(err => {
                console.log(err)
            })


    }, [currentUser])



    return (
        <CurrentUserContext.Provider value={{ userTweets, setUserTweets }}>
            {children}
        </CurrentUserContext.Provider>
    )


}




