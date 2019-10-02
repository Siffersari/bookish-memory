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
      code: 'US',
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
    } = newProps;

    const {
      carousel: {
        item: { name: prevItem },
      },
    } = this.props;

    name !== prevItem &&
      this.setState({
        isChanged: true,
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
    } = this.props;

    const { item: firstItem, isChanged } = this.state;

    // console.log('state', item);

    console.log('item.rating', item.rating);

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
            <span>
              {(item.prices && item.prices[3].price) ||
                firstItem.prices[3].price}
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

const mapStateToProps = ({ carousel }) => ({
  carousel,
});

export default connect(
  mapStateToProps,
  null
)(Description);

// .toLocaleString(
//   (country.length > 0 && `en-${country[0].code}`) || 'en-US',
//   {
//     style: 'currency',
//     currency:
//       (country.length > 0 && country[0].currency) || 'USD',
//   }
// )
