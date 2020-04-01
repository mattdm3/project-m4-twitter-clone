import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom"
import { ReactComponent as CatLogo } from "../assets/logo.svg";
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import COLORS from "../constants"
import { NavLink } from "./NavLink";
import { CurrentUserContext, CurrentUserProvider } from "./CurrentUserContext"



const Sidebar = (props) => {

    const { currentUser, status } = React.useContext(CurrentUserContext);



    return (


        <SidebarContainer>
            <StyledLogo />
            <ul>
                <StyledLink to="/"><li><StyledIcon icon={home} />Home</li></StyledLink>
                <StyledLink to="/my-profile"><li> <StyledIcon icon={user} />Profile</li></StyledLink>
                <StyledLink to="/notifications"><li><StyledIcon icon={bell} />Notifications</li></StyledLink>
                <StyledLink to="/bookmarks"><li><StyledIcon icon={bookmark} />Bookmarks</li></StyledLink>
            </ul>
        </SidebarContainer>

        /* <MainContent>{props.children}</MainContent> */


    )
}


const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black; 
`

// const PageContainer = styled.div`
//     display: flex; 
// `

const MainContent = styled.div`
    
`

const StyledIcon = styled(Icon)`
    padding-right: 10px; 
    font-size: 1.1rem;
`

const StyledLogo = styled(CatLogo)`
    width: 50px; 
    position: relative;
    top: 10px; 
    left: -18px; 
`

const SidebarContainer = styled.div`
    position: fixed; 
    left: 160px; 
/*    
    margin-left: 180px;  */
    /* margin-right: 50px;  */
    min-width: 150px; 
    height: 100%; 
    border-right: 1px solid #EEEEEE;
    padding-right: 20px; 
    z-index: 3;
    
  
    

    ul {
        display: flex; 
        flex-direction: column;
        align-items: flex-start;
        width: 100%; 
        

    }

    li{
        margin: 15px 0;
        text-align: left; 
        font-weight: 700;
        width: 100%; 
        

        border: 1px solid transparent;
        padding: 7px 9px; 
        border-radius: 20px; 

        &:hover {
            background: #EDE7FE;
        }

       
        
    }
`

export default Sidebar;