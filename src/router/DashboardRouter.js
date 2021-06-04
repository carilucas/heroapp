import React from 'react';
import {
   Route,
   Redirect,
   Switch
 } from "react-router-dom";
import { Navbar } from '../components/NavComponent';
import { DcComponent } from '../components/DcComponent';
import { MarvelComponent } from '../components/MarvelComponent';
import { SearchComponent } from '../components/SearchComponent';
import { HeroScreen } from '../components/HeroScreen';


export const DashboardRouter = () => {

   
   return (
      <div>
         <Navbar/>
         <div className="container mt-4">
               <Switch>
                  <Route exact path="/marvel" component={MarvelComponent}/>
                  <Route exact path="/dc" component={DcComponent}/>
                  <Route exact path="/search/" component={SearchComponent}/>
                  <Route exact path="/hero/:heroId" component={HeroScreen} />
                  <Redirect to='/marvel' />
               </Switch>
         </div>
      </div>
   )
}
