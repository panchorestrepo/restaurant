import { ADD_ITEM, EMPTY_CART  } from '../actions/types';

export default function(state = {}, action) {
   switch (action.type) {
       case ADD_ITEM: {
        console.log('ADD_ITEM',action.payload)
        const menu = action.payload
        const qty = typeof state[menu.id] === 'undefined' ? 1 : state[menu.id].qty + 1;
       
        return {...state, [menu.id]: {id : menu.id, qty}};
       }
       case EMPTY_CART : {
            return {}
       }
       default:
        return state;
   } 
}