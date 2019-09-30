import React, { Component } from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Description from '../Description';
import Cart from '../../components/CartList';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="gallery-container">
          <div className="column">
            <Carousel></Carousel>
          </div>
          <div className="column">
            <Cart></Cart>
          </div>
        </div>
        <Description></Description>
      </div>
    );
  }
}

export default Home;
