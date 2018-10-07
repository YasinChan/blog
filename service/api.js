import axios from 'axios';

const axiosInstance = axios.create();

const BASE_RUL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001' : '/';

axiosInstance.interceptors.request.use(
  config => {
    config.baseURL = BASE_RUL;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

export const getPosts = () => axiosInstance.get('/api/post');

export const getPostById = id => axiosInstance.get(`/api/post/${id}`);

export const getPostsByTagId = id => axiosInstance.get(`/api/postbytagid/${id}`)

export const getTags = () => axiosInstance.get('/api/tag');
