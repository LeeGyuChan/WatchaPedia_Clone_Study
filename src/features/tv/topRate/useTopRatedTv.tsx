import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query'
import { topRatedApi } from '../../../apis/tvApi'
import { ListResponse, TVDetail } from '../../../types';

const useTopRatedTv = () =>{
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('TopRatedTv', topRatedApi);
}

export default useTopRatedTv