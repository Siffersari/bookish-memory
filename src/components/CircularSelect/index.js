import React, { Component } from 'react';
import '../../assets/styles/CircularSelect/Select.css';
import { rotate } from '../../utils/app';
import { toggleOptions } from '../../utils/app';

export class Select extends Component {
  componentDidMount() {
    $('.selector button').click(function(e) {
      toggleOptions($(this).parent());
    });
    $('.selector li input').click(function(e) {
      const code = $("input[name='currency']:checked").val();
    });
  }

  render() {
    return (
      <div className="selector">
        <ul>
          <li>
            <input id="1" type="radio" name="currency" value="US" />
            <label for="1">USD</label>
          </li>
          <li>
            <input id="2" type="radio" name="currency" value="NG" />
            <label for="2">NGN</label>
          </li>
          <li>
            <input id="3" type="radio" name="currency" value="KE" />
            <label for="3">KSH</label>
          </li>
          <li>
            <input id="4" type="radio" name="currency" value="EU" />
            <label for="4">EUR</label>
          </li>
        </ul>
        <button> &#36; </button>
      </div>
    );
  }
}

export default Select;
