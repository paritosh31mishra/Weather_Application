import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Portal from './portal';
import Login from './login';

const clientId = "760079447893-amufhf0iqkdqufvfn0r0bega57le5ls2.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    // This is now optional if you're using @react-oauth/google
    console.log("App initialized"); 
  }, []);

  const userId = localStorage.getItem("fullname");

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {userId == null ? <Login /> : <Portal />}
    </GoogleOAuthProvider>
  );
}

export default App;