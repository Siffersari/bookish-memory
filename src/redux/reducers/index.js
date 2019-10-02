import { combineReducers } from 'redux';
import carousel from './carouselReducer';
import select from './selectReducer';

const rootReducer = combineReducers({
  carousel,
  select,
});

export default rootReducer;
