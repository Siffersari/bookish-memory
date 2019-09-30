import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/Description/Description.css';

export class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  render() {
    const {
      carousel: { item, isLoading },
    } = this.props;

    console.log('state', item);

    return (
      <div className="wrapper">
        <div className="product-info">
          <div className="product-text">
            <h1>{item.name}</h1>
            <h2>by studio and friends</h2>
            <p>
              {item.description}
            </p>
          </div>
          <div className="product-price-btn">
            <p>
              <span>78</span>$
            </p>
            <button type="button">buy now</button>
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
