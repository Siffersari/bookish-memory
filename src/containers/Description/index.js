import React, { Component } from 'react';
import '../../assets/styles/Description/Description.css';

export class Description extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="product-info">
          <div className="product-text">
            <h1>Harvest Vase</h1>
            <h2>by studio and friends</h2>
            <p>
              Harvest Vases are a reinterpretation of peeled fruits and
              vegetables as functional objects. The surfaces appear to be sliced
              and pulled aside, allowing room for growth.{' '}
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

export default Description;
