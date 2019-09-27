import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../assets/styles/Carousel/Carousel.css';
import laptop from '../../assets/images/laptop.png';

export class Carousel extends Component {
  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    return <ImageGallery items={images} />;
  }
}

export default Carousel;
