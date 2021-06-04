import { DashboardRouter } from "../../router/DashboardRouter";

import {mount} from 'enzyme';
import { AuthCotext } from "../../auth/authContext";
import { MemoryRouter } from "react-router";


describe('Pruebas en <DashboardRouter>', () => {
   
   const value = {
      user:{
         name:'Juan',
         logged: true,
      },
      dispatch: jest.fn()
   }

   test('Debe mostrar el snapshot', () => {
       
      const wrapper = mount(
         <MemoryRouter>
            <AuthCotext.Provider value={value}>
               <DashboardRouter/>
            </AuthCotext.Provider>
         </MemoryRouter>
      
      );

      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.find('h1').text().trim()).toBe('MarvelComponent');

   })
   
})
