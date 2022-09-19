import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { auth } from "./../firebase.js";

function Header() {

  if (auth.currentUser === null) {
    return (
      <React.Fragment>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"><Link to="/">LeaderBet</Link></span>
          <span class="mb-0 h1"><Link to="/login">Login</Link></span>
          <span class="mb-0 h1"><Link to="/register">Register</Link></span>
        </div>
      </nav>
    </React.Fragment>
    )
  } else if (auth.currentUser !== null) {
    return (
      <React.Fragment>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"><Link to="/">LeaderBet</Link></span>
          <span class="mb-0 h1">`${auth.userEmail}`</span>
        </div>
      </nav>
    </React.Fragment>
    )
  }
}

export default Header;