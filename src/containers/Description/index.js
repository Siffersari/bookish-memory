import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rater from 'react-rater';
import Select from '../../components/CircularSelect';
import '../../assets/styles/Description/Description.css';
import 'react-rater/lib/react-rater.css';
import { data } from '../../datastore';
// import { handleSelect } from '../../assets/js/selector';
// require('../../assets/js/selectFx');
// require('../../assets/js/classie');

export class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: data.products[3],
      rating: 4,
    };
  }

  // componentDidMount() {
  //   handleSelect();
  // }

  render() {
    const {
      carousel: { item, isLoading },
    } = this.props;

    const { item: firstItem, rating } = this.state;

    // console.log('state', item);

    console.log('item.rating', item.rating);

    return (
      <div className="wrapper">
        <div className="product-info">
          <div className="product-text">
            <h1>{item.name || firstItem.name}</h1>
            <h2>
              <Rater total={5} rating={item.rating} interactive={false} />
            </h2>
            <p>{item.description || firstItem.description}</p>
          </div>
          <div className="product-price-btn">
            <Select></Select>
            <button className="p-price-btn" type="button">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ carousel }) => ({
  carousel,
});

export default connect(
  mapStateToProps,
  null
)(Description);
