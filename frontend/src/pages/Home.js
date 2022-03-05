import React, {useState} from 'react'
//import Login from '../components/Login'
//import Logout from '../components/Logout'
import GoogleLogin from 'react-google-login'
//import GoogleLogout from 'react-google-login'
import Dashboard from '../pages/Dashboard'


export default function Home() {
  const [isLoggedIn, setLogin ] = useState(false)
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
    if(response.profileObj) {
      setLogin(true)
    } else {
      console.log('ERROR: could not login')
    }
  }

  return (
    <div>
      {isLoggedIn ? 
      <Dashboard/>
     : 
     <GoogleLogin
     clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
     buttonText='Login'
     onSuccess={responseGoogle}
     onFailure={responseGoogle}
     cookiePolicy='single_host_origin'
     isSignedIn={true} // DELETE LATER ?
     /> 
      }

    </div>
    
  )
}
