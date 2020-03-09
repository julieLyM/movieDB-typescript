import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <h1
          style={{
            color: 'green',
            textTransform: 'uppercase',
          }}
        >
          <Link to="/Home">The movie DataBase</Link>
        </h1>
        <SearchBar />
      </div>
    );
  }
}
