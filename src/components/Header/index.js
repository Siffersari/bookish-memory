import React, { Component } from 'react';
import '../../assets/styles/Home/demo.css';

export class Header extends Component {
  render() {
    return (
      <header className="title-header">
        <h1>Amazing</h1>
        <div className="search-icons">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-cart"> Cart</i>
        </div>
      </header>
    );
  }
}

export default Header;
