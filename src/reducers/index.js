import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ShoppingCart from './reducer_shopping_cart'
import MenusReducer from './reducer_menus'
import CheckOutReducer from './reducer_checkout'

const rootReducer = combineReducers({
  orderStatus: CheckOutReducer,
  shoppingCart: ShoppingCart,
  menus : MenusReducer,
  form: formReducer,
});

export default rootReducer;