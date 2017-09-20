import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import CommentsReducer from './reducer_comments';
import SortReducer from './reducer_sort';
import CategoriesReducer from './reducer_categories';
import ConfirmationStatus from './reducer_confirmation_status'
import MenusReducer from './reducer_menus'

const rootReducer = combineReducers({
  sortCriteria : SortReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  categories: CategoriesReducer,
  menus : MenusReducer,
  confirmationStatus : ConfirmationStatus,
  form: formReducer,
});

export default rootReducer;