import { CHECKOUT, CHECKIN, GET_MENUS, ADD_ITEM, EMPTY_CART } from './types'
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

export function placeOrder(order) {
  return (dispatch) => {
    fetch(`${api}/checkout`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( order )
      })
      .then(response => response.json())
      .then((response) => dispatch({
        type: CHECKOUT,
        payload : response

      }))
  }
}
export function emptyCart() {
    return {
      type : EMPTY_CART
    }
}
export function checking() {
  return {
    type : CHECKIN
  }
}
