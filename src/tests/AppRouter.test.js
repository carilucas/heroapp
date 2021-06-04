import { AppRouter } from "../router/AppRouter";
import {mount} from 'enzyme'
import { AuthCotext } from "../auth/authContext";

const dispatch = jest.fn()
describe('Pruebas en <AppRouter>', () => {
   

   test('Debe mostrar login si no está autenticado', () => {
      
      const user = {logged:false}

      const wrapper = mount(
      <AuthCotext.Provider value={{user,dispatch}}>
         <AppRouter/>
      </AuthCotext.Provider>
      
      );
      
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h1').text()).toBe('LoginComponent');

   });

   test('Debe mostrar el componente marvel si está autenticado', () => {
      
      const user = {
         name: 'Fernando',
         logged:true
      }

      const wrapper = mount(
      <AuthCotext.Provider value={{user,dispatch}}>
         <AppRouter/>
      </AuthCotext.Provider>
      
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.navbar').exists()).toBe(true);

   })
   
   
})
