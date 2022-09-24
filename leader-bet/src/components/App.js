import React, { useState, useContext, useEffect } from 'react';
import { auth } from "./../firebase.js";
import MainPageControl from './MainPageControl';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UserContext} from "./UserContext";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {

const [isLogged, setIsLogged] = useState(false);
const [userName, setUserName] = useState(null);

// const { userName, setUserName } = useContext(UserContext);
const grabObject = window.sessionStorage.getItem(sessionStorage.key(auth.currentUser));
const parseObject = JSON.parse(grabObject);

useEffect(() => {
  if (grabObject === null) {
  } else {
    setUserName(parseObject.email);
  }
},[window.sessionStorage])

  return (
    <Router>
        <UserContext.Provider value={{isLogged, setIsLogged, userName, setUserName}}>
          
          <Routes>
            <Route exact path="/" element={<PrivateRoute />} >
              <Route exact path="/" element={<MainPageControl />}/>
            </Route>    
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
        <Footer />
    </Router>
  );
}

export default App;
