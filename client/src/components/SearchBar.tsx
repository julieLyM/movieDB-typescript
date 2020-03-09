import React, { Component } from 'react';
import { searchMovie } from '../service/dataMovies';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

interface ISearchResults {
  poster_path?: string;
  popularity: number;
  id: string;
  overview: string;
  backdrop_path?: string;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: string[];
  original_language: string;
  vote_count: number;
  name?: string;
  original_name: string;
  title?: string;
  profile_path?: string;
}

interface IState {
  queries: string;
  searchRes: ISearchResults[];
}

export default class SearchBar extends Component<{}, IState> {
  state: IState = {
    queries: '',
    searchRes: [],
  };

  componentDidMount() {
    this.fetchDataSearching();
  }

  fetchDataSearching = async () => {
    const { queries } = this.state;
    const res = await searchMovie(queries);
    this.setState({
      searchRes: res.results,
    });
  };
  debounceSearch = debounce(this.fetchDataSearching, 200);

  myHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        queries: e.currentTarget.value,
      },
      () => this.debounceSearch()
    );
  };

  clearSearchBar = () => {
    this.setState({ queries: '', searchRes: [] });
  };

  render() {
    const { searchRes } = this.state;
    return (
      <div style={{ margin: '0 auto', position: 'relative' }}>
        <input
          onChange={this.myHandlerChange}
          placeholder="search movie"
          style={{ width: '360px', height: '50px' }}
        />
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'white',
          }}
        >
          <p>
            {searchRes.map((element: ISearchResults, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '350px',
                }}
              >
                <Link to={`/MovieDetail/${element.id}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`}
                      alt="search movie or actor"
                      style={{ width: '50px', margin: '10px' }}
                    />
                    {element.title}
                  </div>
                </Link>
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
