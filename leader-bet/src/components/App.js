import React, { useState } from 'react';
import MainPageControl from './MainPageControl';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UserContext} from "./UserContext";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {

const [isLogged, setIsLogged] = useState(false);
const [userName, setUserName] = useState(null);

  return (
    <Router>
        <UserContext.Provider value={{isLogged, setIsLogged, userName, setUserName}}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPageControl />} />    
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
        <Footer />
    </Router>
  );
}

export default App;
