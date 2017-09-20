import { GET_MENUS } from './types'
import { api, headers} from './api_info';

export default function getMenus() { 
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
