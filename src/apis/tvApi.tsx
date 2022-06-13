import axiosInstance from ".";

export const latestApi = () => axiosInstance.get('/tv/latest');

export const aringTodayApi = () => axiosInstance.get('/tv/upcoming');

export const onTheAirApi = () => axiosInstance.get('/tv/now_playing');

export const topRatedApi = () => axiosInstance.get('/tv/top_rated');

export const popularApi = () => axiosInstance.get('/tv/popular');

export const detailApi = (tvId : string) => axiosInstance.get(`/tv/${tvId}`);

export const simnilarApi = (tvId : string) => axiosInstance.get(`tv/${tvId}/similar`);

export const searchApi = (query:string) => axiosInstance.get(`/search/tv?query=${query}`);


