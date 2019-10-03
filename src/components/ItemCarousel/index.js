import React, { Component } from 'react';
import { connect } from 'react-redux';
import Whirligig from 'react-whirligig';
import { fetchClickedImage } from '../../redux/actions/carouselActions';
import '../../assets/styles/ItemCarousel/Carousel.css';
import laptop from '../../assets/images/laptop.png';
import cellphone from '../../assets/images/cellphone.png';
import shoes from '../../assets/images/shoes.png';
import pants from '../../assets/images/pants.png';
import shirt from '../../assets/images/shirt.png';

export class ItemGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  onImageClick = name => {
    this.setState({
      name,
    });

    const { fetchClickedImage: fetchImageName } = this.props;

    fetchImageName(name);
  };

  render() {
    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    return (
      <div className="carousel-container">
        <Whirligig
          visibleSlides={3}
          className="item-container"
          gutter="10em"
          ref={_whirligigInstance => {
            whirligig = _whirligigInstance;
          }}
        >
          <img
            className="prime-img"
            src={shirt}
            name="Shirt"
            onClick={e =>
              this.onImageClick(e.target.attributes.getNamedItem('name').value)
            }
          />
          <img
            className="prime-img"
            src={pants}
            name="Pants"
            onClick={e =>
              this.onImageClick(e.target.attributes.getNamedItem('name').value)
            }
          />
          <img
            className="prime-img"
            src={shoes}
            name="Shoes"
            onClick={e =>
              this.onImageClick(e.target.attributes.getNamedItem('name').value)
            }
          />
          <img
            className="prime-img"
            src={cellphone}
            name="Cellphone"
            onClick={e =>
              this.onImageClick(e.target.attributes.getNamedItem('name').value)
            }
          />
          <img
            className="prime-img"
            src={laptop}
            name="Laptop"
            onClick={e =>
              this.onImageClick(e.target.attributes.getNamedItem('name').value)
            }
          />
        </Whirligig>
        <button onClick={prev} className="carousel-btn btn-small">
          <i className="fa fa-angle-left"></i>
        </button>
        <button onClick={next} className="carousel-btn carousel-next btn-small">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ carousel }) => ({
  carousel,
});

const mapDispatchToProps = () => ({
  fetchClickedImage,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(ItemGallery);
