import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../service/dataMovies';
export interface IProps {}

export interface IMovie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface IState {
  results: IMovie[];
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

export default class Home extends Component<IProps, IState> {
  state = {
    results: [],
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const data = await getMovies();
    this.setState({
      results: data,
    });
  };

  render() {
    const { results } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
        }}
      >


        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {results.map((res: IMovie, i) => (
            <div key={i} style={{ flex: '0 0 150px', margin: '10px' }}>
              <Link to={`/MovieDetail/${res.id}`}>
                <img
                  src={`${imageBaseUrl}${res.poster_path}`}
                  alt="movie poster"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
