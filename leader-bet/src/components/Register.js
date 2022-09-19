import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {

  const cardWidth = {
    width: "18rem",
    marginTop: "250px"
  }

  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    console.log('click');
    const email = event.target.email.value;
    const password = event.target.password.value;
    const password2 = event.target.password2.value;
    if (password === password2) {
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      })
    } else {
      setSignUpSuccess("Your passwords are not the same!")
    }
    
  };

  return (
    <React.Fragment>
      <div>
      {signUpSuccess}
        <div className="card text-center mx-auto p-3" style={cardWidth}>
          <div className="">
            <h3 className="mb-3 card-title">Register</h3>
            <form className="form" onSubmit={doSignUp}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control col-xs-3" 
                    id="exampleInputEmail1" size="50"
                    name="email" 
                    aria-describedby="emailHelp" 
                    placeholder="email"></input>
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    id="exampleInputPassword1" 
                    placeholder="password"></input>
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password2"
                    id="exampleInputPassword2" 
                    placeholder="confirm password"></input>
                </div>
              <button type="submit" className="btn btn-outline-primary">Register</button>
              </form>
          </div>
        </div>
        <p className="text-center mt-3">Already have an account? Login here!</p>
      </div>
    </React.Fragment>
  );
};

export default Register;