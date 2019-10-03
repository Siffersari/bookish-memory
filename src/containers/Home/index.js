import React, { Component } from 'react';
import Header from '../../components/Header';
import Description from '../Description';
import ItemCarousel from '../../components/ItemCarousel';
import Footer from '../../components/Footer';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="gallery-container">
          <ItemCarousel></ItemCarousel>
        </div>
        <Description></Description>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
