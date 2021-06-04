import React from 'react'
import { Redirect, Route } from 'react-router'
import { DashboardRouter } from './DashboardRouter';
import PropTypes from 'prop-types'



export const PrivateRouter = ({
   logged,
   component:Component,
   ...rest
}) => {
   localStorage.setItem('lastPath',rest.location.pathname)
   return (
      <Route 
         {...rest}
         component = {
            (props)=>(
               logged
                  ? <DashboardRouter {...props} /> 
                  : <Redirect to="/login" />
            )
         }
      
      />
   )
}

PrivateRouter.propTypes = {
   logged : PropTypes.bool.isRequired,
   component : PropTypes.func.isRequired,
}