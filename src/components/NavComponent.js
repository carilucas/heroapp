import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthCotext } from '../auth/authContext'
import { LOGOUT } from '../auth/types'

export const Navbar = () => {
      const history = useHistory();
      const { user:{name}, dispatchUser } = useContext(AuthCotext);

      
      
      const handleLogout = ()=>{
            history.replace('/login');
            dispatchUser({
                  type: LOGOUT
            });
            
      }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">         
            <div className="container">
               <Link 
                  className="navbar-brand" 
                  to="/"
               >
                  Hero App
               </Link>

               <div className="navbar-collapse">
                  <div className="navbar-nav">

                     <NavLink 
                           activeClassName="active"
                           className="nav-item nav-link" 
                           exact
                           to="/marvel"
                     >
                           Marvel
                     </NavLink>

                     <NavLink 
                           activeClassName="active"
                           className="nav-item nav-link" 
                           exact
                           to="/dc"
                     >
                           DC
                     </NavLink>
                     
                     <NavLink 
                           activeClassName="active"
                           className="nav-item nav-link" 
                           exact
                           to="/search"
                     >
                           Search 
                     </NavLink>
                  </div>
               </div>

               <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <ul className="navbar-nav ms-auto">
                        <li>
                              <span className="nav-item nav-link" style={{color:'cyan'}}>{name}</span>
                        </li>
                        <li>
                              <button 
                                    className="nav-item nav-link btn btn-outline-info" 
                                    onClick={ handleLogout }
                              >
                                    Logout
                              </button>
                        </li>
                  </ul>
               </div>
            </div>
        </nav>
    )
}