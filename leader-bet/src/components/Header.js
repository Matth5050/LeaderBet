import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";

function Header() {

  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const { userName, setUserName } = useContext(UserContext);
  const grabObject = window.sessionStorage.getItem(sessionStorage.key(auth.currentUser));
  const parseObject = JSON.parse(grabObject);
  console.log(parseObject);
  setUserName(parseObject.email);
  // setUserName('test');


// useEffect(() => {
//   if (grabObject === null) {
//     setUserName("test");
//   } else {
//     setUserName(parseObject);
//   }
// },[window.sessionStorage])

// console.log(userName.email);

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }


  if (auth.currentUser === null) {
    return (
      <React.Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1"><Link to="/">LeaderBet</Link></span>
          <div>
            <span className=""><Link to="/login"><button className="btn btn-outline-primary">Login</button></Link></span>
            <span className="mx-3"><Link to="/register"><button className="btn btn-outline-primary">Register</button></Link></span>
          </div>
        </div>
      </nav>
    </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <span className="navbar-brand mb-0 h1"><Link to="/">LeaderBet</Link></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {userName}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link to="/">Profile</Link></li>
                    <li className="dropdown-item"><Link to="/login">Login</Link></li>
                    <li className="dropdown-item" onClick={doSignOut}><Link to="/login">Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
        </nav>
    </React.Fragment>
    )
  }
}

export default Header;
