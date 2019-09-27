import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../assets/styles/Carousel/Carousel.css';
import laptop from '../../assets/images/laptop.png';

export class Carousel extends Component {
  render() {
    const images = [
      {
        original: laptop,
        thumbnail: laptop,
        originalClass: 'main-carousel',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        originalClass: 'carousel',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    return <ImageGallery items={images} useBrowserFullscreen={false} />;
  }
}

export default Carousel;
