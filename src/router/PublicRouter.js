import React from 'react'
import { Redirect, Route } from 'react-router'
import { LoginComponent } from '../components/LoginComponent'

export const PublicRouter = ({
   logged,
   component:Component,
   ...rest
}) => {
   return (
      <Route 
         {...rest}
         component = {
            (props)=>(
               !logged
               
                  ? <LoginComponent {...props} /> 
                  : <Redirect to="/" />
            )
         }
      
      />
   )
}
