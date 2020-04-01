import React from "react"

export const CurrentUserContext = React.createContext(null)

export const CurrentUserProvider = ({ children }) => {


    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    const [userTweets, setUserTweets] = React.useState(null);


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
                console.log(data);
            })


            .catch(err => {
                console.log(err);
            });
    }, [])






    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    )


}
