import Vue from 'vue'
import Vuex from 'vuex'

import movies from './api/movies'

Vue.use(Vuex)

export const MUTATIONS = {
  updateMovieListMeta: 'UPDATE_MOVIE_LIST_META',
  isFetchingMovieList: 'IS_FETCHING_MOVIE_LIST',
  setMoviesList: 'SET_MOVIES_LIST'
}

export default new Vuex.Store({
  state: {
    favouriteMovies: [],
    movieListMeta: {
      page: 1,
      per_page: 10,
      total: 0,
      total_pages: 0,
    },
    movies: [],
    isFetchingMovieList: false
  },
  mutations: {
    [MUTATIONS.updateMovieListMeta]: (state, {
      page,
      per_page,
      total,
      total_pages
    }) => {
      state.movieListMeta.page = page
      state.movieListMeta.per_page = per_page
      state.movieListMeta.total = total
      state.movieListMeta.total_pages = total_pages
    },

    [MUTATIONS.isFetchingMovieList]: (state, isFetching) => {
      state.isFetching = isFetching
    },

    [MUTATIONS.setMoviesList]: (state, movies) => {
      state.movies = movies
    }
  },
  actions: {
    fetchMovies: ({commit}, page = 1) => {
      return movies.getList(page)
        .then(response => {

          const {
            page,
            per_page,
            total,
            total_pages,
            data
          } = response.data

          commit(MUTATIONS.updateMovieListMeta, {page, per_page, total, total_pages});
          commit(MUTATIONS.setMoviesList, data);
        })
    }
  },
  getters: {
    favouriteMovies: state => {
      return state.favouriteMovies
    },
    moviesCount: state => {
      return state.movies.length
    },
    getMovieById: state => imdbID => {
      return state.movies.find(_ => _.imdbID.toLocaleLowerCase() === imdbID.toLocaleLowerCase())
    }
  }
})
