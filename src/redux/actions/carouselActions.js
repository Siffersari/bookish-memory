import { FETCH_CLICKED_ITEM } from '../constants';
import { data } from '../../datastore';
import { filterItem } from '../../utils/app';

export const fetchSuccess = response => ({
  type: `${FETCH_CLICKED_ITEM}_SUCCESS`,
  response,
});

export const fetchClickedImage = name => dispatch => {
  dispatch({ type: FETCH_CLICKED_ITEM });

  const result = filterItem(data.products, 'name', name);

  console.log('NAME HERE', result);

  return (
    (name && dispatch(fetchSuccess(result[0] || []))) ||
    console.log('Something went wrong')
  );
};
