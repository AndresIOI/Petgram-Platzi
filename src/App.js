import React from 'react';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisterUser } from './pages/NotRegisterUser';
import { Navbar } from './components/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Router } from '@reach/router'; 

const UserLogged = ({isAuth}) => {
	return (
    
      isAuth
        ?
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>
        :
          <Router>
            <NotRegisterUser path='/favs' />
            <NotRegisterUser path='/user' />
          </Router>
  );
}
export const App = () => {
  const isAuth = false;
 return(
  <>
   <GlobalStyles />
   <Logo />
   <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Details path='/details/:detailId' />
    </Router>

    <UserLogged isAuth={isAuth} />
    <Navbar />
  </>
 );
}