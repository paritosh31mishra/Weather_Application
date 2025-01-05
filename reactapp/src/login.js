/*
import { GoogleLogin }  from 'react-google-login';
import Portal from './portal';

const oAuthKey = "925306536966-8krnsg2kdor08se5s6d47vla1pec5f2f.apps.googleusercontent.com";

const Login = () =>{

  const onSuccess = (res) =>{
     console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
     localStorage.setItem ("userid", res.profileObj.googleId);
     // here we store login details in the chrome local storage so that we can login
     localStorage.setItem("fullname", res.profileObj.name);
     window.location.href="http://localhost:3000/#/"
   window.location.reload();// Reload the page(app.js) after login is success
    
  }

  const onFailure = (res) =>{
    alert("login failed! try again...")
  }
  

  return(
    <section className='text-center edit' >
    <nav className="navbar bg-dark border-bottom border-body  p-4 h1">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-white"><h2>Open Weather</h2></span>
    </div>
  </nav>


  <div className="container  p-5 mb-5 " >
                        <div className="row p-5"  >
                             <div className="col-lg-6 p-5 mt-5">
                              <div>
                              <p className='title'><b>Weather</b></p>
                               <p className='subtitle '> <b>Weather is the art of nature, painting the sky with its ever-changing moods.</b></p>
                               </div>
                             </div>
                            <div className="col-lg-4 mt-5">
                            <div className="p-4  login-box mt-4">

                                 <div className='row'>
                                   <h2 className="text-center">Login with google</h2>
                                     <hr/>
                                    <div className='mb-3 pt-4'>
                                       <p> <div id="signInButton" >
                                        <GoogleLogin 
                                          clientId = {oAuthKey}
                                          buttonText = "Login in google"
                                          onSuccess = {onSuccess}
                                          onFailure = {onFailure}
                                          cookiePolicy={'single_host_origin'}
                                        />
                                      </div></p>
                                      
                                       </div>
                                 </div>
                            </div>
                           
                         </div>
                         <div className="col-lg-2"></div>
                      </div>
                      </div>
    
     
    
  </section>
  )
}

export default Login;

*/


import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Portal from './portal';

const oAuthKey = "760079447893-amufhf0iqkdqufvfn0r0bega57le5ls2.apps.googleusercontent.com";

const Login = () =>{

  const onSuccess = (res) =>{
    const userDetails = JSON.parse(atob(credentialResponse.credential.split('.')[1])); // Decode the token payload
    console.log("LOGIN SUCCESS! Current user: ", userDetails);
    localStorage.setItem("userid", userDetails.sub); // Google's user ID
    localStorage.setItem("fullname", userDetails.name);
    window.location.href = "http://localhost:3000/#/";
    window.location.reload(); // Reload the page after login is successful
    
  }

  const onFailure = (res) =>{
    alert("Login failed! Please try again...");
  }
  

  return(
    <section className='text-center edit' >
    <nav className="navbar bg-dark border-bottom border-body  p-4 h1">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-white"><h2>Open Weather</h2></span>
    </div>
  </nav>


  <div className="container  p-5 mb-5 " >
                        <div className="row p-5"  >
                             <div className="col-lg-6 p-5 mt-5">
                              <div>
                              <p className='title'><b>Weather</b></p>
                               <p className='subtitle '> <b>Weather is the art of nature, painting the sky with its ever-changing moods.</b></p>
                               </div>
                             </div>
                            <div className="col-lg-4 mt-5">
                            <div className="p-4  login-box mt-4">

                                 <div className='row'>
                                   <h2 className="text-center">Login with google</h2>
                                     <hr/>
                                    <div className='mb-3 pt-4'>
                                       <p> <div id="signInButton" >
                                       <GoogleLogin
                                          onSuccess={onSuccess}
                                          onError={onFailure}
                                        />
                                      </div></p>
                                      
                                       </div>
                                 </div>
                            </div>
                           
                         </div>
                         <div className="col-lg-2"></div>
                      </div>
                      </div>
    
     
    
  </section>
  )
}

export default Login;