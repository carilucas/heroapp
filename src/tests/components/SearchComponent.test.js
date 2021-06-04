import { SearchComponent } from "../../components/SearchComponent";
import { mount } from 'enzyme';
import { MemoryRouter, Route } from "react-router";

// const location = jest.fn();

describe('Pruebas en <SearchComponent>', () => {
   const history = {
      push: jest.fn()
   }
   test('Debe mostrar el Snapshot', () => {
      
      const wrapper = mount(
         <MemoryRouter initialEntries={['/search']}>
            <Route path="/search" component={SearchComponent} />
         </MemoryRouter>
      )
      
      expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('.alert-info').text().trim()).toBe('Enter a hero name')
   });

   test('Debe mostrar batman y el input con el valor del query string', () => {
      
      const wrapper = mount(
         <MemoryRouter initialEntries={['/search?hero=batman']}>
            <Route path="/search" component={SearchComponent} />
         </MemoryRouter>
      )

      expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('input').prop('value') ).toBe('batman');
      expect( wrapper.find('.card').exists() ).toBe(true);
      expect( wrapper.find('.card-title').text().trim() ).toBe('Batman');

   });

   test('Debe mostrar un error si no se encuentra el hero', () => {
      
      const wrapper = mount(
         <MemoryRouter initialEntries={['/search?hero=barbero']} >
            <Route path='/search' component={ SearchComponent } />
         </MemoryRouter>
      );

      expect( wrapper.find('input').prop('value')).toBe('barbero');

      expect( wrapper.find('.alert-danger').exists()).toBe(true);

   });

   test('Debe de llamar el push del history', () => {
      const history = {
         push: jest.fn()
      }
      const wrapper = mount(
         <MemoryRouter initialEntries={['/search?hero=batman']} >
            <Route 
               path='/search' 
               component={ () => <SearchComponent history={history}/> }  
            />
         </MemoryRouter>
      );

      wrapper.find('input').simulate('change',{
         target:{
            name:'searchText',
            value: 'batman'
         }
      });

      wrapper.find( 'form' ).prop('onSubmit')({
         preventDefault(){}
      });

      expect( history.push ).toHaveBeenCalledWith( '?hero=batman' );

   })
   
   
   
   

})
