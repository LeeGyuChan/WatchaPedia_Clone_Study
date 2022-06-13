import axios from "axios";
import * as gavr from '../global_variables'

const axiosInstance = axios.create({
    baseURL: gavr.REACT_APP_API_HOST,
    params : {
        api_key : gavr.REACT_APP_API_KEY,
        language : 'ko-KR'
    }
});

export default axiosInstance;