import React, { useContext } from 'react';
import { AuthCotext } from '../auth/authContext';
import { LOGIN } from '../auth/types';



export const LoginComponent = ({history}) => {

   const { dispatchUser } = useContext(AuthCotext);
   
   const lastPath = localStorage.getItem('lastPath') || '/';

   
   const handleLogin = ()=>{
      dispatchUser({
         type: LOGIN,
         payload:{
            name:'Carlos',
            logged: true
         }
      })
      history.push(lastPath)
   }



   return (
      <div className="container mt-5">
         <h1>LoginComponent</h1>
         <hr/>
         <button 
            className="btn btn-primary"
            onClick={ handleLogin }
         >
            Login
         </button>
      </div>
   )
}
