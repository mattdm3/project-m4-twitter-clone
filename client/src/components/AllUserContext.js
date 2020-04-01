import React from "react"

export const AllUserContext = React.createContext(null);

export const AllUserProvider = ({ children }) => {


    const [feed, setFeed] = React.useState(null);
    const [feedStatus, setFeedStatus] = React.useState("loading")

    const [users, setUsers] = React.useState([])


    React.useEffect(() => {
        fetch(`/api/me/home-feed`, {
            "method": "GET",
            "headers": {}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeed(data);
                setFeedStatus("loaded");
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <AllUserContext.Provider value={{ feed, feedStatus }}>
            {children}
        </AllUserContext.Provider>
    )

}