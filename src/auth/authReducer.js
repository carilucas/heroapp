
import { LOGIN, LOGOUT } from './types';


export const authReducer = (state = {}, {type,payload}) => {
   switch (type) {
      case LOGIN:
        return payload
   
      case LOGOUT:
        return {logged:false}
   
      default:
         return state
   }
}
