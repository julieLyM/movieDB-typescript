import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import {
  ContainerHeader,
  Title,
  ContainerTitle,
  ContainerSearch,
} from './style/HeaderStyle';

export default class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <ContainerTitle>
          <Title>
            <Link to="/">The movie DataBase</Link>
          </Title>
        </ContainerTitle>
        <ContainerSearch>
          <SearchBar />
        </ContainerSearch>
      </ContainerHeader>
    );
  }
}
