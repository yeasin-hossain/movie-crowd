export const api_key = '?api_key=cd890f94a756b1518a2a17617a5b430e';
export const base_url = 'https://api.themoviedb.org/3';

export const API_END_POINT = {
  getGenre: `/genre/movie/list${api_key}`,
  discoverMovie: (genre: string) =>
    `/discover/movie${api_key}&include_adult=false&include_video=false&with_genres=${genre}`,
};
