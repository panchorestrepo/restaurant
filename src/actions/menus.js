import { GET_MENUS, ADD_ITEM } from './types'
import { api, headers} from './api_info';

export function getMenus() { 
    return (dispatch) => {
      fetch(`${api}/menus`, { headers })
        .then(res => res.json())
        .then(data => data.menus)
        .then((menus) => dispatch({
          type: GET_MENUS,
          payload : menus        
        }));
      }
  }

export function addItem(item) {
    return {
      type : ADD_ITEM,
      payload : item
    }
  }