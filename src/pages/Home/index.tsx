import React, { useEffect } from "react";
import { Row, Col } from "antd";

import { Movie } from "models";
import MovieCard from "components/MovieCard";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import {
  getMovies,
  likeMovie,
  unlikeMovie,
  selectMovies,
  selectLikedMovies,
} from "redux/reducers/moviesReducer";

const Home = () => {
  const movies = useAppSelector(selectMovies);
  const likedMovies = useAppSelector(selectLikedMovies);

  const dispatch = useAppDispatch();

  const handleLike = (id: number) => {
    const movie = movies.find((x) => x.id === id) as Movie;
    const likedMovie = likedMovies.find((x) => x.id === id);

    if (likedMovie) {
      dispatch(unlikeMovie(movie));
    } else {
      dispatch(likeMovie(movie));
    }
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 48 }}>
      {movies &&
        movies.map((movie, i) => (
          <Col lg={8} md={12} xs={24} key={i}>
            <MovieCard movie={movie} showButton onLike={handleLike} />
          </Col>
        ))}
    </Row>
  );
};

export default Home;
