export const api_key = '?api_key=cd890f94a756b1518a2a17617a5b430e';
export const base_url = 'https://api.themoviedb.org/3';
export const ImageEndPoint = (url: string) =>
  `https://image.tmdb.org/t/p/w500${url}`;

export const API_END_POINT = {
  getGenre: `/genre/movie/list${api_key}`,
  discoverMovie: (genre: number) =>
    `/discover/movie${api_key}&include_adult=false&include_video=false&with_genres=${genre}`,
  trendingMovie: (page: number) =>
    `/trending/movie/week${api_key}&page=${page}`,
  movieCastAndCrew: (movieId: number) => `/movie/${movieId}/credits${api_key}`,
  movieDetail: (movieId: number) => `/movie/${movieId}${api_key}`,

  IMDB: (id: number) => `https://www.imdb.com/title/${id}`,
};
