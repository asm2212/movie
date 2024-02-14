import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const createAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: apiConfig.baseUrl,
        headers: {
            'Content-Type': 'application/json'
        },
        paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
    });

    axiosInstance.interceptors.request.use(async (config) => {
        return config;
    });

    axiosInstance.interceptors.response.use((response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }, (error) => {
        throw error;
    });

    return axiosInstance;
};

export const axiosClient = createAxiosInstance();


