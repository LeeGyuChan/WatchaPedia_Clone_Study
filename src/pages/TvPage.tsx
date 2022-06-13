import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LatestTvSection from '../features/tv/latest'
import styled from '@emotion/styled'
import AiringTodaySection from '../features/tv/airingToday'
import PopularSection from '../features/tv/popular'
import TopRateSection from '../features/tv/topRate'
import OnTheAirSection from '../features/tv/onTheAir'

const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto; 
`;

const Container = styled.div`
    margin-top: 62px;
    padding: 24px 0;
`;

export default function TvPage() {
    return (
        <>  
        <Header/>
        <Main>
            <Container>
                {/* <LatestTvSection/> */}
                <AiringTodaySection/>
                <OnTheAirSection/>
                <PopularSection/>
                <TopRateSection/>
            </Container>
        </Main>
        <Footer/>
      
    </>
    )
}
