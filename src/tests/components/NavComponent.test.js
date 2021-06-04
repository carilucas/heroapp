
import {Navbar} from '../../components/NavComponent';
import {mount} from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { AuthCotext } from '../../auth/authContext';
import { LOGOUT } from '../../auth/types';
import  '@testing-library/jest-dom'

// const handleLogout = jest.fn();


describe('Pruebas en <NavComponent>', () => {
   
   const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      replace: jest.fn(),
   }

   const value = {
      user:{
         name:'pepe',
         logged: true
      },
      dispatchUser: jest.fn()
   }

   afterAll( ()=>{
      jest.clearAllMocks();
   })

   test('Debe de mostrar el nombre del usuario logeado', () => {
      
      const wrapper = mount(
         <AuthCotext.Provider value = {value} >
            <MemoryRouter>
               <Navbar />
            </MemoryRouter>
         </AuthCotext.Provider>
      );

      expect(wrapper.find('span.nav-link').text()).toBe(value.user.name);

   });

   test('Debe llamar Logout y el history', () => {
      
      const wrapper = mount(
         <AuthCotext.Provider value = {value} >
            <MemoryRouter>
               <Router history={ historyMock } >
                  <Navbar />
               </Router>
            </MemoryRouter>
         </AuthCotext.Provider>
      );
      
      const props = wrapper.find('button').prop('onClick')();
      
      expect( value.dispatchUser ).toHaveBeenCalled();
      expect( value.dispatchUser ).toHaveBeenCalledWith({
         type: LOGOUT
      });

      expect( historyMock.replace ).toHaveBeenCalled();
      expect( historyMock.replace ).toHaveBeenCalledWith('/login');
      
      

   })
   
   

})
