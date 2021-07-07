import React from "react";
import { Row, Col } from "antd";

import MovieCard from "components/MovieCard";

import { useAppSelector } from "redux/hooks";
import { selectLikedMovies } from "redux/reducers/moviesReducer";

const Liked = () => {
  const movies = useAppSelector(selectLikedMovies);

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 48 }}>
      {movies &&
        movies.map((movie, i) => (
          <Col lg={8} md={12} xs={24} key={i}>
            <MovieCard movie={movie} showButton={false} />
          </Col>
        ))}
    </Row>
  );
};

export default Liked;
