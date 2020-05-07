import { combineReducers } from 'redux';


// REDUCERS

import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers ({
    products: productsReducer,
    cart: cartReducer
})

