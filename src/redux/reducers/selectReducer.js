import { FETCH_CURRENCY } from '../constants';

const initialState = {
  currency: 'USD',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, isLoading: true };
    case `${FETCH_CURRENCY}_SUCCESS`:
      return { ...state, isLoading: false, currency: action.response };

    default:
      return state;
  }
};
