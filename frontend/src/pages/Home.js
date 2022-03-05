import React, { useState } from 'react'
//import Login from '../components/Login'
//import Logout from '../components/Logout'
import GoogleLogin from 'react-google-login'
//import GoogleLogout from 'react-google-login'
import Dashboard from '../pages/Dashboard'


export default function Home() {
  const [isLoggedIn, setLogin] = useState(false)
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
    if (response.profileObj) {
      setLogin(true)
    } else {
      console.log('ERROR: could not login')
    }
  }

  return (
    <div>
      {isLoggedIn ?
        <Dashboard />
        :
        <>
          {/*if user is not logged in, show this */}
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/600x500" />
              <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                <div class="flex justify-center">

                  <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText='Login' onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy='single_host_origin' isSignedIn={true} />
                </div>
              </div>
            </div>
          </section>
        </>
      }

    </div>

  )
}
