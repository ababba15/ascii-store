import { combineReducers } from 'redux';
import products from './products';
import loading from './loading';

export default combineReducers({
    products,
    loading
});