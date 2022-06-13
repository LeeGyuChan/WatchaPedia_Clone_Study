import styled from "@emotion/styled"
import React from "react"
import Card from "../../../components/Card";
import useLatestMovie from "./useLatestMovie";
import * as gavr from '../../../global_variables'

const Base = styled.div``;

const Title = styled.h4``;

const LatestMovieSection = () =>{

    const { data, isLoading } = useLatestMovie();

    const getYear = (data:string) => {return data.split('-')[0]};
    
    return(
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data? (<div>Loading....</div>) 
                : (
                    <Card
                        linkUrl={`/movie/${data.data.id}`}
                        title={data.data.title}
                        posterPath={`${gavr.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
                        voteAverage ={data.data.vote_average}
                        year = {getYear(data.data.release_date)}
                    />
                )
            }
        </Base>
    )
}

export default LatestMovieSection