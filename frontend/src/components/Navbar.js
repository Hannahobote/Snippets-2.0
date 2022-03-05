import React from 'react'
import NavbarLandingPage from './NavbarLandingPage';
import NavbarLoggedIn from './NavbarLoggedIn';

export default function Navbar(props) {

  return (
    <div>
      { props.auth ? <NavbarLoggedIn/> : <NavbarLandingPage /> }
    </div>
  )
}
