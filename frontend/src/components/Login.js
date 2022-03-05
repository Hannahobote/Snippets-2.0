import React from 'react'
import GoogleLogin from 'react-google-login'
//import dotenv from 'dotenv'
//dotenv.config()

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }
  return (
    <div>
      <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy='single_host_origin'
      isSignedIn={true} // DELETE LATER ?
      />
    </div>
  )
}
