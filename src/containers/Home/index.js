import React, { Component } from 'react';
import '../../assets/styles/Home/Home.css';
import '../../assets/styles/Home/demo.css';
import '../../assets/styles/Home/normalize.css';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="codrops-header">
          <h1>Amazing</h1>
        </header>
        <div className="deco deco--title"></div>
        <div id="slideshow" className="slideshow">
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Macadamia Skin Oil <span className="slide__price">$39</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="https://drive.google.com/file/d/15-_5teBP5HPM35z75pNfxuEdoPlpZo3x/view"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/1.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Macadamia Skin Oil
                  </h2>
                  <p className="slide__description">
                    Hydration for very dry skin
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $39
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Grapeseed Skin Oil <span className="slide__price">$19</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="assets/images/small/2.png"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/2.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Grapeseed Skin Oil
                  </h2>
                  <p className="slide__description">
                    Moisture control for all skin types
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $19
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Jojoba Skin Oil <span className="slide__price">$35</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="assets/images/small/3.png"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/3.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Jojoba Skin Oil
                  </h2>
                  <p className="slide__description">
                    Protection for sensitive skin
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $35
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Amaranth Skin Oil <span className="slide__price">$29</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="assets/images/small/4.png"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/4.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Amaranth Skin Oil
                  </h2>
                  <p className="slide__description">
                    Rich hydration for mature skin
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $29
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Argan Skin Oil <span className="slide__price">$59</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="assets/images/small/5.png"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/5.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Argan Skin Oil
                  </h2>
                  <p className="slide__description">
                    Moisture for problematic &amp; dry skin
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $59
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <h2 className="slide__title slide__title--preview">
              Avocado Skin Oil <span className="slide__price">$39</span>
            </h2>
            <div className="slide__item">
              <div className="slide__inner">
                <img
                  className="slide__img slide__img--small"
                  src="assets/images/small/6.png"
                  alt="Some image"
                />
                <button
                  className="action action--open"
                  aria-label="View details"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="slide__content">
              <div className="slide__content-scroller">
                <img
                  className="slide__img slide__img--large"
                  src="assets/images/6.png"
                  alt="Some image"
                />
                <div className="slide__details">
                  <h2 className="slide__title slide__title--main">
                    Avocado Skin Oil
                  </h2>
                  <p className="slide__description">
                    Deep repair for stressed skin
                  </p>
                  <div>
                    <span className="slide__price slide__price--large">
                      $39
                    </span>
                    <button className="button button--buy">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="action action--close" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
