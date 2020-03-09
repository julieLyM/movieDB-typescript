import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Credits from './Credits';

import { getMovieById } from '../service/dataMovies';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

interface IProps extends RouteComponentProps<{ movieId: string }> {}

interface IState {
  movie: IMovieDetail | null;
}

interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: number[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: number[];
  production_countries: number[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: number[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default class MovieDetail extends Component<IProps, IState> {
  state: IState = {
    movie: null,
  };

  componentDidMount() {
    this.fetchMovieId();
  }

  fetchMovieId = async () => {
    const { movieId } = this.props.match.params;
    const movie = await getMovieById(movieId);
    this.setState({
      movie,
    });
  };

  render() {
    const { movie } = this.state;

    if (!movie) {
      return <div>LOADING...</div>;
    }
    const { title, overview, poster_path, release_date } = movie;

    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
        }}
      >
        <h1>{title}</h1>
        <img src={`${imageBaseUrl}${poster_path}`} alt="movie poster" />
        <span>
          <h3>Release date:</h3> {release_date}
        </span>

        <h3>Synopsis: </h3>
        <p>{overview}</p>
        <Credits movieId={this.props.match.params.movieId} />
      </div>
    );
  }
}
