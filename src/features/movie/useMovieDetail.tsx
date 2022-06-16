import { AxiosError, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { detailApi } from "../../apis/movieApi"
import { MovieDetail } from "../../types"


const useMovieDetail = (query? : string) => {
    query = query ? query : ''
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['detailMovie', query], () => detailApi(query), {enabled: Boolean(query)})
}

export default useMovieDetail