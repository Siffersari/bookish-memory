import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateOnChange from 'react-animate-on-change';
import { fetchSelectedCurrency } from '../../redux/actions/selectActions';
import '../../assets/styles/CircularSelect/Select.css';
import { toggleOptions } from '../../utils/app';

export class Select extends Component {
  componentDidMount() {
    $('.selector button').click(function(e) {
      toggleOptions($(this).parent());
    });

    const { fetchSelectedCurrency: fetchCurrency } = this.props;

    $('.selector li input').click(function(e) {
      const currency = $("input[name='currency']:checked").val();

      const s = $('.selector button');

      toggleOptions(s.parent());

      fetchCurrency(currency);
    });
  }

  render() {
    const { price, firstItem, selectedCurrency, currency } = this.props;

    const pricing = (
      (price && price[0].price) ||
      firstItem.prices[3].price
    ).toLocaleString(
      `en-${(selectedCurrency && selectedCurrency.slice(0, 2)) || 'US'}`,
      {
        style: 'currency',
        currency: currency,
      }
    );
    return (
      <div>
        <div className="selector">
          <ul>
            <li>
              <input
                id="1"
                type="radio"
                name="currency"
                value="USD"
                defaultChecked={true}
              />
              <label htmlFor="1">USD</label>
            </li>
            <li>
              <input id="2" type="radio" name="currency" value="NGN" />
              <label htmlFor="2">NGN</label>
            </li>
            <li>
              <input id="3" type="radio" name="currency" value="KES" />
              <label htmlFor="3">KSH</label>
            </li>
            <li>
              <input id="4" type="radio" name="currency" value="EUR" />
              <label htmlFor="4">EUR</label>
            </li>
          </ul>
          <button>
            {' '}
            {(pricing.slice(0, 3) === 'Ksh' && 'Ksh') ||
              pricing.slice(0, 1)}{' '}
          </button>
        </div>
        <AnimateOnChange
          baseClassName="pricing"
          animationClassName="pricing--bounce"
          animate={this.props.selectedId === this.props.id}
        >
          <span className="pricing price-span">{pricing}</span>
        </AnimateOnChange>

        <button className="p-price-btn" type="button">
          add to cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ select }) => ({
  select,
});

const mapDispatchToProps = () => ({
  fetchSelectedCurrency,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Select);
