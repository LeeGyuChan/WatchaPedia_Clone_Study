import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query'
import { airingTodayApi } from '../../../apis/tvApi'
import { ListResponse, TVDetail } from '../../../types';

const useAiringTodayTv = () =>{
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('AiringTodayTv', airingTodayApi);
}

export default useAiringTodayTv