import React from "react";
import Odds from "./Odds"
import LeaderBoard from "./LeaderBoard";
import { auth } from './../firebase.js'
import Header from "./Header";
import Footer from "./Footer"
import BetSlip from "./BetSlip"
import Scores from "./Scores";

function MainPageControl() {

  if (auth.currentUser === null) {
    return (
      <React.Fragment>
        <Header />
        <h1>{auth.currentUser}</h1>
        <h1>You must be signed in to access the queue.</h1>
        <Footer />
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
                <div className='col-3 d-flex flex-column test'>
                  <div className="lBoard">
                    <LeaderBoard />
                    <BetSlip /> 
                    <Scores />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </React.Fragment>
      )
    }
}

export default MainPageControl;