import React, { Component } from 'react';
import '../../assets/styles/Footer/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer--social">
          <a href="https://instagram.com" target="_blank">
            <i className="fa fa-instagram instagram-icon"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div className="footer--bottom">
          <p className="footer--text">
            ©copyright Leewel Mwangi | All rights reserved | Website design
            &amp; development by Leewel Mwangi
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
