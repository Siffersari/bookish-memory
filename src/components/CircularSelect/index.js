import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return (
      <div className="selector">
        <ul>
          <li>
            <input id="1" type="radio" name="currency" value="USD" />
            <label for="1">USD</label>
          </li>
          <li>
            <input id="2" type="radio" name="currency" value="NGN" />
            <label for="2">NGN</label>
          </li>
          <li>
            <input id="3" type="radio" name="currency" value="KES" />
            <label for="3">KSH</label>
          </li>
          <li>
            <input id="4" type="radio" name="currency" value="EUR" />
            <label for="4">EUR</label>
          </li>
        </ul>
        <button> &#36; </button>

        <span className="price-span">
          {(
            (price && price[0].price) ||
            firstItem.prices[3].price
          ).toLocaleString(
            `en-${(selectedCurrency && selectedCurrency.slice(0, 2)) || 'US'}`,
            {
              style: 'currency',
              currency: currency,
            }
          )}
        </span>
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
