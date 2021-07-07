import { Movie } from "models";

import http from "./httpService";

export default class MovieService {
  static getPopular = async (): Promise<Movie[]> => {
    let { data } = await http.get("movie/popular/");
    return data.results;
  };
}
