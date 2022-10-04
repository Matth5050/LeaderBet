import React, { useState, useContext, useEffect } from 'react';
import { auth } from "./../firebase.js";
import MainPageControl from './MainPageControl';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UserContext, BetContext} from "./UserContext";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {

const [isLogged, setIsLogged] = useState(false);
const [userName, setUserName] = useState(null);
const [mainScoresList, setMainScoresList] = useState(nums);

// const { userName, setUserName } = useContext(UserContext);
const grabObject = window.sessionStorage.getItem(sessionStorage.key(auth.currentUser));
const parseObject = JSON.parse(grabObject);

useEffect(() => {
  if (grabObject === null) {
  } else {
    setUserName(parseObject.email);
  }
},[window.sessionStorage])

  useEffect(() => {
    setMainScoresList(nums)
  }, [nums]);

  return (
    <Router>
        <BetContext.Provider  value={{mainScoresList, setMainScoresList}}>
        <UserContext.Provider value={{isLogged, setIsLogged, userName, setUserName}}>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />} >
              <Route exact path="/" element={<MainPageControl />}/>
            </Route>    
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
        </BetContext.Provider>
    </Router>
  );
}

export default App;

const nums = [
  {
      "id": "da9ee648135469a635e468728c6c8643",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T13:28:40Z",
      "completed": false,
      "home_team": "New Orleans Saints",
      "away_team": "Minnesota Vikings",
      "scores": [
          {
              "name": "New Orleans Saints",
              "score": "25"
          },
          {
              "name": "Minnesota Vikings",
              "score": "28"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "564ff543a5c91fc293f4a2e2185fd9ae",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "completed": true,
      "home_team": "Atlanta Falcons",
      "away_team": "Cleveland Browns",
      "scores": [
          {
              "name": "Atlanta Falcons",
              "score": "23"
          },
          {
              "name": "Cleveland Browns",
              "score": "20"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "a6fbcda64cf0ae114e2b9f5a903d8787",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "completed": true,
      "home_team": "Dallas Cowboys",
      "away_team": "Washington Commanders",
      "scores": [
          {
              "name": "Dallas Cowboys",
              "score": "25"
          },
          {
              "name": "Washington Commanders",
              "score": "10"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "90f985f50a4494efaff2c9aed8dd5fc9",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "completed": true,
      "home_team": "Indianapolis Colts",
      "away_team": "Tennessee Titans",
      "scores": [
          {
              "name": "Indianapolis Colts",
              "score": "17"
          },
          {
              "name": "Tennessee Titans",
              "score": "24"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "382c3fc7b3690f68c94a05a00fd45200",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:10Z",
      "completed": true,
      "home_team": "Philadelphia Eagles",
      "away_team": "Jacksonville Jaguars",
      "scores": [
          {
              "name": "Philadelphia Eagles",
              "score": "29"
          },
          {
              "name": "Jacksonville Jaguars",
              "score": "21"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "ede5d3a33c5440e94a2414e16b9d558c",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:19Z",
      "completed": true,
      "home_team": "Pittsburgh Steelers",
      "away_team": "New York Jets",
      "scores": [
          {
              "name": "Pittsburgh Steelers",
              "score": "20"
          },
          {
              "name": "New York Jets",
              "score": "24"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "1bbebcfe66fcbe87bd3d168a537bfd86",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:34Z",
      "completed": true,
      "home_team": "Baltimore Ravens",
      "away_team": "Buffalo Bills",
      "scores": [
          {
              "name": "Baltimore Ravens",
              "score": "20"
          },
          {
              "name": "Buffalo Bills",
              "score": "23"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "d019cc903bd06974bfe6a81bbea09990",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:44Z",
      "completed": true,
      "home_team": "Detroit Lions",
      "away_team": "Seattle Seahawks",
      "scores": [
          {
              "name": "Detroit Lions",
              "score": "45"
          },
          {
              "name": "Seattle Seahawks",
              "score": "48"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "14b939e4de73f3993936210cbe325697",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:58Z",
      "completed": true,
      "home_team": "New York Giants",
      "away_team": "Chicago Bears",
      "scores": [
          {
              "name": "New York Giants",
              "score": "20"
          },
          {
              "name": "Chicago Bears",
              "score": "12"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "4a390c47f97e123b2c921ea852bc5a4e",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:02:59Z",
      "completed": true,
      "home_team": "Houston Texans",
      "away_team": "Los Angeles Chargers",
      "scores": [
          {
              "name": "Houston Texans",
              "score": "24"
          },
          {
              "name": "Los Angeles Chargers",
              "score": "34"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "f12a4526bee72287c74d49a104c92a1d",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:06:00Z",
      "completed": true,
      "home_team": "Carolina Panthers",
      "away_team": "Arizona Cardinals",
      "scores": [
          {
              "name": "Carolina Panthers",
              "score": "16"
          },
          {
              "name": "Arizona Cardinals",
              "score": "26"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "7b478403b8bb8582cd694e020d203e9b",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:25:28Z",
      "completed": true,
      "home_team": "Green Bay Packers",
      "away_team": "New England Patriots",
      "scores": [
          {
              "name": "Green Bay Packers",
              "score": "27"
          },
          {
              "name": "New England Patriots",
              "score": "24"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "2e05153aebb4a2bc7c1a066f387de468",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:27:52Z",
      "completed": true,
      "home_team": "Las Vegas Raiders",
      "away_team": "Denver Broncos",
      "scores": [
          {
              "name": "Las Vegas Raiders",
              "score": "32"
          },
          {
              "name": "Denver Broncos",
              "score": "23"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  },
  {
      "id": "396b57cac445752ddb7bd83236faf1b4",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-03T00:22:55Z",
      "completed": false,
      "home_team": "Tampa Bay Buccaneers",
      "away_team": "Kansas City Chiefs",
      "scores": [
          {
              "name": "Tampa Bay Buccaneers",
              "score": "17"
          },
          {
              "name": "Kansas City Chiefs",
              "score": "31"
          }
      ],
      "last_update": "2022-10-03T02:26:27Z"
  } 
];
