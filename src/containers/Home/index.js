import React, { Component } from 'react';
import Header from '../../components/Header';
import Description from '../Description';
import ItemCarousel from '../../components/ItemCarousel';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="gallery-container">
          <ItemCarousel></ItemCarousel>
        </div>
        <Description></Description>
      </div>
    );
  }
}

export default Home;
