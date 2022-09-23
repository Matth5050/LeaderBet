import React, { useContext } from "react";
import Odds from "./Odds"
import LeaderBoard from "./LeaderBoard";
import { Link } from "react-router-dom";
import { auth } from './../firebase.js'
import Header from "./Header";



function MainPageControl() {
console.log(auth.currentUser);

  if (auth.currentUser === null) {
    return (
      <React.Fragment>
        <Header />
        <h1>{auth.currentUser}</h1>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } else {
      return (
        <React.Fragment>
          <Header />
          <div className="bg">
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-9'>
              <Odds />
            </div>
            <div className='col-3'>
              <LeaderBoard />
            </div>
          </div>
        </div> 
    
          </div>
      </React.Fragment>
      )
    }
  // } else if (auth.currentUser != null) { 
}

export default MainPageControl;