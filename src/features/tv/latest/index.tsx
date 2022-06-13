import styled from "@emotion/styled"
import React from "react"
import Card from "../../../components/Card";
import * as gavr from '../../../global_variables'
import useLatestTv from "./useLatestTv";

const Base = styled.div`
    margin-bottom: 42px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight:  700;
    line-height: 38px;
    padding: 12px 0 14px;

`;

const LatestTvSection = () =>{

    const { data, isLoading } = useLatestTv();

    const getYear = (data:string) => {return data.split('-')[0]};
    
    return(
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data? (<div>Loading....</div>) 
                : (
                    <Card
                        linkUrl={`/tv/${data.data.id}`}
                        title={data.data.name}
                        posterPath={`${gavr.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}
                        voteAverage ={data.data.vote_average}
                        year = {getYear(data.data.first_air_date)}
                    />
                )
            }
        </Base>
    )
}

export default LatestTvSection