import { AxiosError, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { simnilarApi } from "../../apis/movieApi"
import { ListResponse, MovieDetail } from "../../types"

const useSimilarMovie = (query : string | undefined) => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>, AxiosError>>(['similarMovie', query], ()=> simnilarApi(query), {enabled:Boolean(query)})
}

export default useSimilarMovie