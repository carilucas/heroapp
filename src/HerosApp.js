import React, { useEffect, useReducer } from 'react'
import { AuthCotext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './router/AppRouter';

const init = ()=>(
   JSON.parse(localStorage.getItem('user')) || { logged: false }
);

const heroImages = require.context('./assets/heroes/',true);

export const HerosApp = () => {

   const [user, dispatchUser] = useReducer(authReducer, {}, init);

   useEffect(() => {
      localStorage.setItem('user' , JSON.stringify(user))
      
   }, [user])

   return (
      <AuthCotext.Provider value={{user,dispatchUser, heroImages}}>
         <AppRouter />
      </AuthCotext.Provider>
   )
}
