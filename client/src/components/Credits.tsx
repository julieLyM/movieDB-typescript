import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovieCredit } from '../service/dataMovies';

interface IProps {
  movieId: string;
}

interface IState {
  credits: ICredits[];
}

interface ICredits {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export default class Credits extends Component<IProps, IState> {
  state: IState = {
    credits: [],
  };

  componentDidMount() {
    this.fetchDataCredits();
  }

  fetchDataCredits = async () => {
    const credits = await getMovieCredit(this.props.movieId);
    this.setState({
      credits: credits.cast,
    });
  };

  render() {
    const { credits } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'black',
          maxHeight: '100%',
        }}
      >
        {credits.map((element, i) => (
          <div
            key={i}
            style={{ flex: '0 0 50px', margin: '10px', textAlign: 'center' }}
          >
            <Link to={`/character/${element.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${element.profile_path}`}
                alt="characters of the movie"
              />
            </Link>
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
