import styled from "@emotion/styled"
import React from "react"
import Card from "../../../components/Card";
import * as gavr from '../../../global_variables'
import Slider from "../../../components/Slider";
import useUpComingdMovie from "./useUpComingMoive";

const Base = styled.div`
    margin-bottom: 42px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight:  700;
    line-height: 38px;
    padding: 12px 0 14px;

`;

const UpComingSection = () =>{

    const { data, isLoading } = useUpComingdMovie();

    const getYear = (data:string) => {return data.split('-')[0]};
    
    return(
        <Base>
            <Title>개봉 예정작 </Title>
            {
                isLoading || !data? (<div>Loading....</div>) 
                : (
                  <Slider>
                    {
                        data.data.results.map(movie => (
                            <Card
                            key = {movie.id}
                            linkUrl={`/movie/${movie.id}`}
                            title={movie.title}
                            posterPath={`${gavr.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                            voteAverage ={movie.vote_average}
                            year = {getYear(movie.release_date)}
                        />
                        ))
                    }
                  </Slider>
                )
            }
        </Base>
    )
}

export default UpComingSection