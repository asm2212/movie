

import axiosClient from "./axiosClient";


export const Category = {
    MOVIE: 'movie',
    TV: 'tv'
}

export const MovieType = {
    UPCOMING: 'upcoming',
    POPULAR: 'popular',
    TOP_RATED: 'top_rated'
}

export const TvType = {
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
    ON_THE_AIR: 'on_the_air'
}


const TmdbApi = {
    
    getMoviesList: (type, params) => {
        const url = `movie/${MovieType[type]}`;
        return axiosClient.get(url, params);
    },


    getTvList: (type, params) => {
        const url = `tv/${TvType[type]}`;
        return axiosClient.get(url, params);
    },


    getVideos: (category, id) => {
        const url = `${Category[category]}/${id}/videos`;
        return axiosClient.get(url);
    },


    search: (category, params) => {
        const url = `search/${Category[category]}`;
        return axiosClient.get(url, { params });
    },

    
    detail: (category, id, params) => {
        const url = `${Category[category]}/${id}`;
        return axiosClient.get(url, { params });
    },

    
    credits: (category, id) => {
        const url = `${Category[category]}/${id}/credits`;
        return axiosClient.get(url);
    },

    similar: (category, id) => {
        const url = `${Category[category]}/${id}/similar`;
        return axiosClient.get(url);
    },
}

export default TmdbApi;
