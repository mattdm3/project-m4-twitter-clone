import React from 'react'
import Sidebar from "./Sidebar"
import { ContentContainer, PageContainer } from "./GlobalStyles"


const Bookmarks = () => {
    return (
        <PageContainer>
            <Sidebar />

            <ContentContainer>
                Bookmarks
            </ContentContainer>

        </PageContainer>


    )
};


export default Bookmarks;