import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import ShoppingCart from './reducer_shopping_cart'
import MenusReducer from './reducer_menus'

const rootReducer = combineReducers({
  posts: PostsReducer,
  shoppingCart: ShoppingCart,
  menus : MenusReducer,
  form: formReducer,
});

export default rootReducer;