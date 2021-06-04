import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthCotext } from '../../auth/authContext';


export const HeroListItem = ({ id, publisher,superhero }) => {
   const {heroImages} = useContext(AuthCotext)
   const history = useHistory();

   const handleHero = (id)=>{
      history.push(`/hero/${id}`)
   }

   return (
      <div className="col-sm-4 my-3">
         <div className="card" >
            <img 
               src={ heroImages(`./${id}.jpg`).default } 
               className="card-img-top" 
               alt={superhero} 
            />
            <div className="card-body">
               <h5 className="card-title">{superhero}</h5>
               <p className="card-text">{publisher}</p>
               <button 
                  onClick={ ()=>handleHero(id) }
                  className="btn btn-primary"
               >
                  More Info
               </button>
            </div>
         </div>
      </div>
   )
}
