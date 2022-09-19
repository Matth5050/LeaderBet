import React from 'react';
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import Odds from './Odds';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     
        <Routes>
            {/* <div className='container'>
                  <div className='row mt-5'>
                    <div className='col-9'>
                      <Odds />
                    </div>
                    <div className='col-3'>
                      <LeaderBoard />
                    </div>
                  </div>
                </div> */}
          <Route path="/" element={<Odds />} />    
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
