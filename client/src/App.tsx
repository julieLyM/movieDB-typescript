import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Character from './components/Character';
import Credits from './components/Credits';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/" render={() => <Header />} />
        <Route path="/MovieDetail/:movieId" component={MovieDetail} />
        <Route path="/MovieDetail/:movieId/credits" component={Credits} />
        <Route path="/character/:characterId" component={Character} />
      </BrowserRouter>
    );
  }
}
