import { FETCH_CLICKED_ITEM } from '../constants';

const initialState = {
  item: {},
  isLoading: false,
};

/*
 *Defines reducer for Carousel component and returns the
 *state based on the action types
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLICKED_ITEM:
      return { ...state, isLoading: true };
    case `${FETCH_CLICKED_ITEM}_SUCCESS`:
      return { ...state, isLoading: false, item: action.response };

    default:
      return state;
  }
};
