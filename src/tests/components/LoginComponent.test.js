import { MemoryRouter } from "react-router";
import { LoginComponent } from "../../components/LoginComponent";
import { mount } from 'enzyme'
import { AuthCotext } from "../../auth/authContext";
import { LOGIN } from "../../auth/types";

const dispatchUser = jest.fn();

describe('Pruebas en <LoginComponent>', () => {
   
   const history = {
      push: jest.fn()
   }

   test('Mostrar el snapshot', () => {
      const wrapper = mount(
         <MemoryRouter>
            <AuthCotext.Provider value={{dispatchUser}}>
               <LoginComponent history={history}/>
            </AuthCotext.Provider>
         </MemoryRouter>
      );

      expect(wrapper).toMatchSnapshot();
   });

   test('Debe realizar el dispatch y la navegacion', () => {

      
      const wrapper = mount(
         <MemoryRouter>
            <AuthCotext.Provider value={{dispatchUser}}>
               <LoginComponent history={ history } />
            </AuthCotext.Provider>
         </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();

      expect(dispatchUser).toHaveBeenCalled();
      expect(dispatchUser).toHaveBeenCalledWith({
         type: LOGIN,
         payload:{
            name:'Carlos',
            logged: true
         }
      });

      expect(history.push).toHaveBeenCalled();

   });

   test('Debe llamar al localStorage', () => {
      const wrapper = mount(
         <AuthCotext.Provider value={{dispatchUser}}>
            <LoginComponent history={ history } />
         </AuthCotext.Provider>
      );

      const handleLogin =  wrapper.find('button').prop('onClick');

      handleLogin();

      expect(history.push).toHaveBeenCalledWith('/');
      
   });

   test('Debe llamar al localStorage', () => {
      localStorage.setItem('lastPath' , '/marvel');
      const history = {
         push: jest.fn()
      }

      const wrapper = mount(
         <AuthCotext.Provider value={{dispatchUser}}>
            <LoginComponent history={ history } />
         </AuthCotext.Provider>
      );

      const handleLogin =  wrapper.find('button').prop('onClick');

      handleLogin();

      expect(history.push).toHaveBeenCalledWith('/marvel');
      
   });


   
   
   
   
})
