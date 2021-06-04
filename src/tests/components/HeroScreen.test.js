import { HeroScreen } from "../../components/HeroScreen"
import { mount } from 'enzyme'
import { MemoryRouter, Route } from "react-router";

describe('Pruebas en <HeroScreen>', () => {

   const history = {
      length : 10,
      goBack: jest.fn(),
      push: jest.fn(),
   }


   test('Mostrar el snapshot del redirect si no hay argumentos en el url', () => {
      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history }/>
         </MemoryRouter>
         
      );
      expect(wrapper).toMatchSnapshot();
      expect( wrapper.find('Redirect').exists()).toBe(true)
   });

   test('Debe mostrar un heroe si el parámetro existe y se encuentra', () => {
      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Route path='/hero/:heroId' component={HeroScreen} />
         </MemoryRouter>
      );

      expect( wrapper.find('.row').exists()).toBe(true);
   });
   
   test('Debe regresar a la pantalla anterior con push', () => {

      const history = {
         length : 1,
         goBack: jest.fn(),
         push: jest.fn(),
      }

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Route 
               path='/hero/:heroId' 
               component={(props)=><HeroScreen history={ history }/>} 
            />   
         </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();

      expect(history.push).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalledWith('/');
      expect(history.goBack).not.toHaveBeenCalled();

   });

   test('Debe llamar a la funcion goBack', () => {
      
      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Route 
               path='/hero/:heroId'
               component={ (props)=> <HeroScreen history={history} />}
            />
         </MemoryRouter>

      );

      wrapper.find('button').prop('onClick')();
      
      expect(history.goBack).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalledTimes(0);


   });

   test('Debe redireccionar si el parametro id no se encuentra', () => {
      
      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spiderwww']}>
            <Route 
               path='/hero/:heroId'
               component={ (props)=> <HeroScreen history={history} />}
            />
         </MemoryRouter>
      );

      console.log(wrapper.html());

      expect( wrapper.html() ).toBe('');

   })
   
   
   
   
})
