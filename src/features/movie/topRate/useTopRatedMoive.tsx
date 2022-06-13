import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query'
import { topRatedApi } from '../../../apis/movieApi'
import { ListResponse, MovieDetail } from '../../../types';

const useTopRatedMovie = () =>{
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('TopRatedMovie', topRatedApi);
}

export default useTopRatedMovie