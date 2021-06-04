import React, { useMemo } from 'react';
import { useForm } from '../hooks/useForm';
import queryString  from 'query-string';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroListItem } from './heros/HeroListItem';
import { useLocation } from 'react-router';

export const SearchComponent = ({history}) => {
   
   const location = useLocation();
   
   const {hero=''} = queryString.parse( location.search );

   const heros = useMemo(() => getHeroByName(hero), [hero]);

   const [value, handleInputChange ] = useForm({searchText:hero});
   const {searchText} = value; 
   
   const handleSubmit = (e)=>{
      e.preventDefault();

      history.push(`?hero=${searchText}`)
      
   }


   return (
      <div>
         <h1>Search</h1>
         <hr/>
         <div className="row">
            <div className="col-sm-3">
               <form 
                  onSubmit = { handleSubmit }
                  
               >
                  <input 
                     type="text" 
                     className="form-control"
                     name="searchText"
                     onChange = { handleInputChange }
                     autoComplete="off"
                     value={ searchText }
                  />
                  <button
                     className="btn btn-primary mt-3"
                  >
                     Search
                  </button>
               </form>
            </div>
            <div className="col-sm-9">
               <div className="row animate__animated animate__fadeIn">
                  {
                     hero === '' 
                        && <div className="alert alert-info">Enter a hero name</div>
                  }
                  {
                     hero !== '' && heros.length < 1
                        && <div className="alert alert-danger">There is no matches for {hero}</div>
                  }
                  {
                     heros.map( hero => (
                        <HeroListItem {...hero} key={hero.id}/>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
