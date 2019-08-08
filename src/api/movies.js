// https://jsonmock.hackerrank.com/api/movies/search/?Title=america&page=1

import axios from 'axios';

const API_BASE_URL = 'https://jsonmock.hackerrank.com/api/movies'
const endpoints = {
    search: '/search/'
}

export default {
    getList: (page = 1) => {
        page = encodeURIComponent(page);
        const listUrl = `${API_BASE_URL}?page=${page}`;
        return axios.get(listUrl);
    },

    search: (keyword, page = 1) => {
        keyword = encodeURIComponent(keyword);
        page = encodeURIComponent(page);
        const searchUrl = `${API_BASE_URL}${endpoints.search}?Title=${keyword}&page=${page}`;
        return axios.get(searchUrl);
    }
}
