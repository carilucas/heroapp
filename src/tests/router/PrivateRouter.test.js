import { PrivateRouter } from "../../router/PrivateRouter"
import {mount} from 'enzyme'
import { MemoryRouter } from "react-router"
import { AuthCotext } from "../../auth/authContext"

const dispatchUser = jest.fn()

describe('Pruebas en <PrivateRouter>', () => {
   
   const rest = {
      location:{
         pathname:'/marvel'
      }
   }

   Storage.prototype.setItem = jest.fn();

   test('Debe mostrar el componente si está autenticado y guardar localstorage', () => {
      const user={
         name:'carlos',
         logged: true
      }
      const wrapper = mount(
         <MemoryRouter >
            <AuthCotext.Provider value={{user, dispatchUser}}>
               <PrivateRouter
                  logged
                  component = { () => <input />}
                  {...rest}
               />
            </AuthCotext.Provider>
         </MemoryRouter>
      
      );

      expect(wrapper.find('nav').exists()).toBe(true);

      expect ( localStorage.setItem ).toHaveBeenCalledWith("lastPath", rest.location.pathname);

   });

   test('Debe bloquear el componente si no está autenticado', () => {
      
      const user={
         logged: false
      }
      const wrapper = mount(
         <MemoryRouter >
            <AuthCotext.Provider value={{user, dispatchUser}}>
               <PrivateRouter
                  logged
                  component = { () => <input />}
                  {...rest}
               />
            </AuthCotext.Provider>
         </MemoryRouter>
      
      );

      
      expect(wrapper).toEqual({})

   });
   
   

})
