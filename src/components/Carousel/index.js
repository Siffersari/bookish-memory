import React, { Component } from 'react';
import { Carousel as Gallery } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/styles/Carousel/Carousel.css';
import laptop from '../../assets/images/laptop.png';
import cellphone from '../../assets/images/cellphone.png';
import shoes from '../../assets/images/shoes.png';
import pants from '../../assets/images/pants.png';
import shirt from '../../assets/images/shirt.png';
import test from '../../assets/images/carouseltest.jpeg';

export class Carousel extends Component {
  render() {
    return (
      <Gallery>
        <div className="product-image">
          <img src={laptop} />
          <p className="legend">Laptop</p>
        </div>
        <div className="product-image">
          <img src={cellphone} />
          <p className="legend">Cellphone</p>
        </div>
        <div className="product-image">
          <img src={shirt} />
          <p className="legend">Shirt</p>
        </div>
        <div className="product-image">
          <img src={pants} />
          <p className="legend">Pants</p>
        </div>
        <div className="product-image">
          <img src={shoes} />
          <p className="legend">Shoes</p>
        </div>
        <div className="product-image">
          <img src={test} />
          <p className="legend">Beauty</p>
        </div>
      </Gallery>
    );
  }
}

export default Carousel;
