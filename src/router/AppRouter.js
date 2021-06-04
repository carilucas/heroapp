import React, { useContext } from 'react'
import {
   BrowserRouter as Router,
   Switch
 } from "react-router-dom";
import { AuthCotext } from '../auth/authContext';
import { LoginComponent } from '../components/LoginComponent';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

  const {user} = useContext(AuthCotext);
  const {logged} = user;
  
   return (
      <Router>
      <div>
        <Switch>
            <PublicRouter exact path="/login" component={LoginComponent} logged={logged}/>
            <PrivateRouter path="/" component={DashboardRouter} logged={logged}/>
        </Switch>
      </div>
    </Router>
   )
}
