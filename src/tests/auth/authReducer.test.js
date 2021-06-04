
import { authReducer } from "../../auth/authReducer";
import { LOGIN, LOGOUT } from "../../auth/types";


describe('Pruebas en authReducer', () => {
   test('Debe retornar el estado por defecto', () => {
      
      const state = authReducer({}, {});

      expect(state).toEqual({})

   });

   test('Debe autenticar y colocar el name del usuario', () => {
      
      const action = {
         type:LOGIN,
         payload:{
            name: 'Carlos',
            logged: true
         }
      }

      const state = authReducer({}, action );

      
      expect(state).toEqual(action.payload);

   });
   
   test('Debe borrar el name y logged en false', () => {
      
      const action = {
         type:LOGOUT,
         payload:{
            logged: false
         }
      }

      const state = authReducer({}, action );

      
      expect(state).toEqual(action.payload);

   });
   
})
