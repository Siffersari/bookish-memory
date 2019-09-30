import React, { Component } from 'react';
import Whirligig from 'react-whirligig';
import '../../assets/styles/ItemCarousel/Carousel.css';
import laptop from '../../assets/images/laptop.png';
import cellphone from '../../assets/images/cellphone.png';
import shoes from '../../assets/images/shoes.png';
import pants from '../../assets/images/pants.png';
import shirt from '../../assets/images/shirt.png';
import test from '../../assets/images/carouseltest.jpeg';

export class ItemGallery extends Component {
  render() {
    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    return (
      <div className="carousel-container">
        <Whirligig
          visibleSlides={3}
          gutter="9em"
          ref={_whirligigInstance => {
            whirligig = _whirligigInstance;
          }}
        >
          <img src={shirt} />
          <img src={pants} />
          <img src={shoes} />
          <img src={cellphone} />
          <img src={laptop} />
        </Whirligig>
        <button onClick={prev} className="carousel-btn">
          Prev
        </button>
        <button onClick={next} className="carousel-btn carousel-next">
          Next
        </button>
      </div>
    );
  }
}

export default ItemGallery;
