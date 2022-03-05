import React from 'react'
import { GoogleLogout } from 'react-google-login'

export default function Logout() {
  const onSuccess = (response) => {
    console.log(response)
    alert('you are logged out.')
  }

  return (
    <div>
      <GoogleLogout 
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Logout'
      onLogoutSuccess={onSuccess}
      />
    </div>
  )
}
