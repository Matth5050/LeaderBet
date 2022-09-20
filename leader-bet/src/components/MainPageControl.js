import React, { useContext } from "react";
import Odds from "./Odds"
import LeaderBoard from "./LeaderBoard";
import { Link } from "react-router-dom";
import { auth } from './../firebase.js'
import { UserContext } from './UserContext';


function MainPageControl() {

  const {isLogged, setIsLogged, userName, setUserName} = useContext(UserContext);

  if (isLogged === false) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } else if (isLogged === true) {
  return (
    <React.Fragment>
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
}

export default MainPageControl;