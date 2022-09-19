import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const cardWidth = {
    width: "18rem",
    marginTop: "250px"
  }

  
  const [signInSuccess, setSignInSuccess] = useState(null);
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  return (
    <React.Fragment>
      <div>
      {signInSuccess}
        <div className="card text-center mx-auto p-3" style={cardWidth}>
          <div className="">
            <h3 className="mb-3 card-title">Login</h3>
            <form className="form" onSubmit={doSignIn}>
                <div className="mb-3">
                  <input 
                  type="email" 
                  className="form-control col-xs-3"
                  name="signinEmail" 
                  id="exampleInputEmail1" 
                  size="50" 
                  aria-describedby="emailHelp" 
                  placeholder="email"></input>
                </div>
                <div className="mb-3">
                  <input 
                  type="password" 
                  name="signinPassword"
                  className="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="password"></input>
                  <p className="small">forgot password?</p>
                </div>
                <button type="submit" className="btn btn-outline-primary">Login</button>
              </form>
          </div>
        </div>
        <p className="text-center mt-3">New to LeaderBet? Register an account here!</p>
      </div>
    </React.Fragment>
  );
};

//zz

export default Login;