import { combineReducers } from 'redux';
import carousel from './carouselReducer';

const rootReducer = combineReducers({
  carousel,
});

export default rootReducer;
