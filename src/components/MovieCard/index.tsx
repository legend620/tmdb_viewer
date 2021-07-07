import React from "react";
import { Card, Button } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import { Movie } from "models";
import { useAppSelector } from "redux/hooks";
import { selectLikedMovies } from "redux/reducers/moviesReducer";

type IMovieProps = {
  movie: Movie;
  showButton: boolean;
  onLike?: Function;
};

const MovieCard = ({ movie, showButton, onLike }: IMovieProps) => {
  const likedMovies = useAppSelector(selectLikedMovies);

  const styles = {
    card: {
      width: "100%",
      display: "flex",
    },
    cover: {
      height: "auto",
      width: 160,
    },
  };

  return (
    <Card
      hoverable
      style={styles.card}
      cover={
        <img
          alt="example"
          style={styles.cover}
          src={process.env.REACT_APP_POSTER_BASE_URL + movie.poster_path}
        />
      }
    >
      <h4>{movie.title}</h4>
      <p>{movie.overview.substring(0, 150) + "..."}</p>
      {showButton && onLike && (
        <div>
          <Button
            type="primary"
            shape="circle"
            icon={
              likedMovies.find((x) => x.id === movie.id) ? (
                <HeartFilled />
              ) : (
                <HeartOutlined />
              )
            }
            onClick={() => {
              onLike(movie.id);
            }}
          />
        </div>
      )}
    </Card>
  );
};

export default MovieCard;
