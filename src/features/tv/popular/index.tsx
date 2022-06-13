import styled from "@emotion/styled"
import React from "react"
import Card from "../../../components/Card";
import usePopularTv from "./usePopularTv";
import * as gavr from '../../../global_variables'
import Slider from "../../../components/Slider";

const Base = styled.div`
    margin-bottom: 42px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight:  700;
    line-height: 38px;
    padding: 12px 0 14px;

`;

const PopularSection = () =>{

    const { data, isLoading } = usePopularTv();

    const getYear = (data:string) => {return data.split('-')[0]};
    
    return(
        <Base>
            <Title>인기 프로그램</Title>
            {
                isLoading || !data? (<div>Loading....</div>) 
                : (
                  <Slider>
                    {
                        data.data.results.map(tv => (
                            <Card
                            key = {tv.id}
                            linkUrl={`/tv/${tv.id}`}
                            title={tv.name}
                            posterPath={`${gavr.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                            voteAverage ={tv.vote_average}
                            year = {getYear(tv.first_air_date)}
                        />
                        ))
                    }
                  </Slider>
                )
            }
        </Base>
    )
}

export default PopularSection