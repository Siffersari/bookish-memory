import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateOnChange from 'react-animate-on-change';
import { bounce } from 'react-animations';
import Rater from 'react-rater';
import Select from '../../components/CircularSelect';
import '../../assets/styles/Description/Description.css';
import 'react-rater/lib/react-rater.css';
import { data } from '../../datastore';
import { filterItem } from '../../utils/app';
// import { handleSelect } from '../../assets/js/selector';
// require('../../assets/js/selectFx');
// require('../../assets/js/classie');

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} 2;
`;

export class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: data.products[3],
      rating: 4,
      isChanged: false,
      currency: 'USD',
    };
  }

  // componentDidMount() {
  //   handleSelect();
  // }

  componentWillReceiveProps(newProps) {
    this.setState({
      isChanged: false,
    });
    const {
      carousel: {
        item: { name },
      },
      select: { currency },
    } = newProps;

    const {
      carousel: {
        item: { name: prevItem },
      },
      select: { currency: prevCurrency },
    } = this.props;

    name !== prevItem &&
      this.setState({
        isChanged: true,
      });

    currency !== prevCurrency &&
      this.setState({
        currency,
      });
  }

  onCurrencyChange(currency) {
    const code = currency.slice(0, 2);
    this.setState({
      code: code,
    });
  }

  render() {
    const {
      carousel: { item },
      select: { currency },
    } = this.props;

    const {
      item: firstItem,
      isChanged,
      currency: selectedCurrency,
    } = this.state;

    const price = filterItem(
      item.prices || firstItem.prices,
      'currency',
      currency
    );
    console.log(selectedCurrency);

    return (
      <div className="wrapper">
        <div className="product-info">
          <div className="product-text">
            <AnimateOnChange
              baseClassName="message"
              animationClassName="message-clicked"
              animate={this.props.selectedId === this.props.id}
            >
              <h1 className="message">{item.name || firstItem.name}</h1>

              <h2>
                <Rater total={5} rating={item.rating} interactive={false} />
              </h2>
              <p>{item.description || firstItem.description}</p>
            </AnimateOnChange>
          </div>
          <div className="product-price-btn">
            <Select></Select>
            <span className="price-span">
              {(
                (price && price[0].price) ||
                firstItem.prices[3].price
              ).toLocaleString(
                `en-${(selectedCurrency && selectedCurrency.slice(0, 2)) ||
                  'US'}`,
                {
                  style: 'currency',
                  currency: currency,
                }
              )}
            </span>

            <button className="p-price-btn" type="button">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ carousel, select }) => ({
  carousel,
  select,
});

export default connect(
  mapStateToProps,
  null
)(Description);
