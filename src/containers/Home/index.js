import React, { Component } from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Carousel></Carousel>
      </div>
    );
  }
}

export default Home;
