import { FETCH_CURRENCY } from '../constants';

export const fetchSuccess = response => ({
  type: `${FETCH_CURRENCY}_SUCCESS`,
  response,
});

export const fetchSelectedCurrency = currency => dispatch => {
  dispatch({ type: FETCH_CURRENCY });

  return (
    (currency && dispatch(fetchSuccess(currency || 'US'))) ||
    console.log('Failed to get currency')
  );
};
