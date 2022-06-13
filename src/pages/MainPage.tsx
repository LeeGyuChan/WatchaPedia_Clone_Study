import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LatestMovieSection from '../features/movie/latest'
import NowPlayingSection from '../features/movie/nowPlaying'
import PopularSection from '../features/movie/popular'
import TopRateSection from '../features/movie/topRate'
import UpComingSection from '../features/movie/upComimg'
import styled from '@emotion/styled'

const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto; 
`;

const Container = styled.div`
    margin-top: 62px;
    padding: 24px 0;
`;

const MainPage = () =>{
    return(
        <>  
            <Header/>
            <Main>
                <Container>
                    {/* <LatestMovieSection/> */}
                    <NowPlayingSection/>
                    <PopularSection/>
                    <TopRateSection/>
                    <UpComingSection/>
                    <Footer/>
                </Container>
            </Main>
          
        </>
    )
}

export default MainPage
