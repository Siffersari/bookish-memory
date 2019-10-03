import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateOnChange from 'react-animate-on-change';
import Rater from 'react-rater';
import Select from '../../components/CircularSelect';
import '../../assets/styles/Description/Description.css';
import 'react-rater/lib/react-rater.css';
import { data } from '../../datastore';
import { filterItem } from '../../utils/app';

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

  componentWillReceiveProps(newProps) {
    const {
      select: { currency },
    } = newProps;

    const {
      select: { currency: prevCurrency },
    } = this.props;

    currency !== prevCurrency &&
      this.setState({
        currency,
      });
  }

  render() {
    const {
      carousel: { item },
      select: { currency },
    } = this.props;

    const { item: firstItem, currency: selectedCurrency } = this.state;

    const price = filterItem(
      item.prices || firstItem.prices,
      'currency',
      currency
    );

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
            <Select
              price={price}
              firstItem={firstItem}
              selectedCurrency={selectedCurrency}
              currency={currency}
            ></Select>
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
