import { ADD_ITEM  } from '../actions/types';

export default function(state = {}, action) {
   switch (action.type) {
       case ADD_ITEM: {
        console.log('ADD_ITEM',action.payload)
        const menu = action.payload
        const qty = typeof state[menu.id] === 'undefined' ? 1 : state[menu.id].qty + 1;
        let totalOrden = typeof state.totalOrden === 'undefined' ? 0 : state.totalOrden;
        totalOrden = totalOrden + menu.price * qty;
        
        return {...state, totalOrden ,[menu.id]: {...menu, qty}};
       }
       default:
        return state;
   } 
}