import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query'
import { nowPlayingApi } from '../../../apis/movieApi'
import { ListResponse, MovieDetail } from '../../../types';

const useNowPlayMovie = () =>{
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
}

export default useNowPlayMovie