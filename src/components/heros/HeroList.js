import React, { useMemo, useState } from 'react';
import { getHerosByPublisher } from '../../helpers/getHerosByPublisher';
import { HeroListItem } from './HeroListItem';

export const HeroList = ( {publisher} ) => {

   const [state, setState] = useState({
      herosByPublisher : useMemo(() => getHerosByPublisher(publisher), [publisher])
   })

   const { herosByPublisher } = state;
   
   const sortByName = (a,b)=>{
      if (a.superhero < b.superhero) {
         return -1
      }if (a.superhero > b.superhero) {
         return 1
      } else {
         return 0
      }
   }

   const handleSort = ()=>{
      setState({
         ...state,
         herosByPublisher : getHerosByPublisher(publisher).sort( sortByName )
      })
   }
   
   return (
      <div className="row animate__animated animate__fadeIn">
         <button
            className="btn btn-primary"
            onClick = { handleSort }
         >
            Sort
         </button>
         {
            herosByPublisher.map( hero =>(
               <HeroListItem {...hero} key={hero.id}/>
            ))
         }
         
      </div>
   )
}
