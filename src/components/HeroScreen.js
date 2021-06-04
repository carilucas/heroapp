import React, { useContext } from 'react'
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../helpers/getHeroById';
import {AuthCotext} from '../auth/authContext'




export const HeroScreen = ({history}) => {
   const {heroId} = useParams();
   const hero = getHeroById(heroId);

   const {heroImages} = useContext(AuthCotext)
   
   if (!hero) {
      
      return <Redirect to="/" />
   }

   const {id,superhero,publisher,alter_ego,first_appearance} = hero;
   

   const handleReturn = ()=>{
      if (history.length <= 2) {
         history.push('/')
      }else{
         history.goBack();
      }
   }
   return (
      <div>
         <h1>{superhero} </h1>
         <hr/>
         <div className="row">
            <div className="col-sm-4 animate__animated animate__fadeIn">
               <img 
                  // src={`../assets/heroes/${id}.jpg`} 
                  src={ heroImages( `./${id}.jpg` ).default }
                  alt={superhero} 
                  className="img-fluid" 
               />
            </div>
            <div className="col-sm-8 animate__animated animate__fadeIn">
            <ul className="list-group">
               <li className="list-group-item">Publisher: {publisher}</li>
               <li className="list-group-item">Alter Ego: {alter_ego}</li>
               <li className="list-group-item">First appearance: {first_appearance}</li>
               <button
                  className="btn btn-primary mt-3"
                  onClick={ handleReturn }
               >
                  Go back
               </button>
            </ul>
            </div>
         </div>
      </div>
   )
}
