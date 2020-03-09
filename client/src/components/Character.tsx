import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getCharacter } from '../service/dataMovies';

interface ICharacter {
  birthday: string;
  known_for_department: string;
  deathday: string;
  id: number;
  name: string;
  also_known_as: string[];
  gender: string;
  biography: string;
  profile_path: string;
  place_of_birth: string;
}

interface IProps extends RouteComponentProps<{ characterId: string }> {}

interface IState {
  characters: ICharacter | null;
}

export default class Character extends Component<IProps, IState> {
  state: IState = {
    characters: null,
  };

  componentDidMount() {
    this.fetchDataCharacter();
  }

  fetchDataCharacter = async () => {
    const { characterId } = this.props.match.params;
    const characters = await getCharacter(characterId);
    this.setState({
      characters,
    });
  };

  render() {
    const { characters } = this.state;

    if (!characters) {
      return <div>LOADING...</div>;
    }

    const { name, birthday, place_of_birth, biography } = characters;

    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          maxHeight: '100%',
        }}
      >
        <h1>{name}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300/${characters.profile_path}`}
          alt="characters of the movie"
        />
        <div>
          <h4>Birthday:</h4> {birthday}
        </div>
        <div>
          <h4>Place of birth:</h4> {place_of_birth}
        </div>
        <h3>{biography}</h3>
      </div>
    );
  }
}
