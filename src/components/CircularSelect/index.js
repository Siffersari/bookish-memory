import React, { Component } from 'react';
import '../../assets/styles/CircularSelect/Select.css';
import { rotate } from '../../utils/app';
import { toggleOptions } from '../../utils/app';

export class Select extends Component {
  componentDidMount() {
    $('.selector button').click(function(e) {
      toggleOptions($(this).parent());
    });
  }
  render() {
    return (
      <div className="selector">
        <ul>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">Option 1</label>
          </li>
          <li>
            <input id="2" type="checkbox" />
            <label for="2">Option 2</label>
          </li>
          <li>
            <input id="3" type="checkbox" />
            <label for="3">Option 3</label>
          </li>
          <li>
            <input id="4" type="checkbox" />
            <label for="4">Option 4</label>
          </li>
          <li>
            <input id="5" type="checkbox" />
            <label for="5">Option 5</label>
          </li>
          <li>
            <input id="6" type="checkbox" />
            <label for="6">Option 6</label>
          </li>
          <li>
            <input id="7" type="checkbox" />
            <label for="7">Option 7</label>
          </li>
          <li>
            <input id="8" type="checkbox" />
            <label for="8">Option 8</label>
          </li>
        </ul>
        <button> &#36; </button>
      </div>
    );
  }
}

export default Select;
