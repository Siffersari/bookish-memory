import React from 'react';
import '../../assets/styles/Home/Home.css';
import '../../assets/styles/Home/demo.css';
import '../../assets/styles/Home/normalize.css';

function Header() {
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

export default Header;
