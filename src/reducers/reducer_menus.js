import { GET_MENUS  } from '../actions/types';

export default function(state = [], action) {
   switch (action.type) {
       case GET_MENUS: 
        console.log('GET_MENUS',action.payload)
        return action.payload;
       default:
        return state;
   } 
}