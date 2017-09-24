import { CHECKOUT, CHECKIN  } from '../actions/types';
const initialOrderStatus = "Composing";

export default function(state = initialOrderStatus, action) {
   switch (action.type) {
       case CHECKOUT: 
        console.log('CHECKOUT',action.payload)
       return action.payload.orderStatus;
       case CHECKIN: 
         console.log('CHECKIN',action.payload)
        return "Composing";       
      default:
        return state;
   } 
}