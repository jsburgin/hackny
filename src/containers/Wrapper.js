import React, { Component } from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import ArticleList from '../components/ArticleList';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Header {...this.state} />
        <Map {...this.state} />
        <ArticleList {...this.state} />
      </div>
    );
  }
}