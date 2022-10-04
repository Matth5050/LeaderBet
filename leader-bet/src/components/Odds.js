import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import  {collection, addDoc } from 'firebase/firestore';
import  { db } from './../firebase.js';
import { v4 } from 'uuid';

function Odds() {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const {userName, setUserName} = useContext(UserContext);
  const oddsArr = test; //dummy data

  function placeBet(team, bet, betId) {
    addDoc(collection(db,'bets'),{
      email: userName,
      team: team,
      bet: bet,
      betId: betId,
      id: v4()
    })
    console.log("success");
  }

  const result = oddsArr.map((element, index) => {
    return element.bookmakers[0].markets[1].outcomes[0].point < 0 ? (
    <table className="table table-dark">
      <thead>
        <tr>
          <th className="">{new Date(element.commence_time).toDateString()}</th>
          <th className="">Spread</th>
          <th className="">Moneyline</th>
          <th className="">Over/Under</th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr>
          <td className="">{element.bookmakers[0].markets[0].outcomes[0].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[0].point}</td>
          <td className="col-3" onClick={() => placeBet(element.bookmakers[0].markets[0].outcomes[0].name, element.bookmakers[0].markets[0].outcomes[0].price, element.id )}>{element.bookmakers[0].markets[0].outcomes[0].price}</td>
          <td className="col-3 ">{element.bookmakers[0].markets[2].outcomes[0].point}</td>
        </tr>
        <tr>
          <td className="">{element.bookmakers[0].markets[0].outcomes[1].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[1].point}</td>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[1].price}</td>
          <td className="col-3">{element.bookmakers[0].markets[2].outcomes[1].point}</td>
        </tr>
      </tbody>
    </table>
  ):(
    <table className="table table-dark ">
      <thead>
        <tr>
          <th className="">{new Date(element.commence_time).toDateString()}</th>
          <th className="">Spread</th>
          <th className="">Moneyline</th>
          <th className="">Over/Under</th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[0].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[0].point}</td>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[0].price}</td>
          <td className="col-3 ">{element.bookmakers[0].markets[2].outcomes[0].point}</td>
        </tr>
        <tr>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[1].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[1].point}</td>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[1].price}</td>
          <td className="col-3">{element.bookmakers[0].markets[2].outcomes[1].point}</td>
        </tr>
      </tbody>
    </table>
  )})
  


  // useEffect(() => {
  //   fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_API_KEY}&regions=us&markets=spreads&Format=american&bookmakers=draftkings`)
  //     .then(response => {
  //         if (!response.ok) {
  //           throw new Error(`${response.status}: ${response.statusText}`);
  //         } else {
  //           return response.json()
  //         }
  //       })
  //     .then((jsonifiedResponse) => {
  //         setGameOdds(jsonifiedResponse)
  //         setIsLoaded(true)
  //       })
  //     .catch((error) => {
  //       setError(error.message)
  //       setIsLoaded(true)
  //     });
  //   }, [])

  //   if (error) {
  //     return <h1>Error: {error}</h1>;
  //   } else if (!isLoaded) {
  //     return <h1>...Loading...</h1>;
  //   } else {
      return (
        <React.Fragment>
        <div className="card text-bg-dark">
          <div className="card-header text-center">
            <h1>Odds</h1>
          </div>
          <div className="d-flex justify-content-around mt-5 mb-4">
            <div>
              <button className="sports btn btn-outline-primary">NFL</button>
            </div>
            <div>
              <button className="sports btn btn-outline-primary">MLB</button>
            </div>
            <div>
              <button className="sports btn btn-outline-primary">NHL</button>
            </div>
          </div>
          <div>
            {/* <ul className="list-group list-group-flush"> */}
              {result}
            {/* </ul> */}
          </div>
        </div>
      </React.Fragment>
      );
      }
  
export default Odds;

const test = [
  {
      "id": "223dd114c6631b89a82aa7af5bc7ac82",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-09-30T00:15:00Z",
      "home_team": "Cincinnati Bengals",
      "away_team": "Miami Dolphins",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Cincinnati Bengals",
                              "price": 1.5
                          },
                          {
                              "name": "Miami Dolphins",
                              "price": 2.7
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Cincinnati Bengals",
                              "price": 1.91,
                              "point": -4.0
                          },
                          {
                              "name": "Miami Dolphins",
                              "price": 1.91,
                              "point": 4.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 47.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 47.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "da9ee648135469a635e468728c6c8643",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T13:30:00Z",
      "home_team": "New Orleans Saints",
      "away_team": "Minnesota Vikings",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Minnesota Vikings",
                              "price": 1.71
                          },
                          {
                              "name": "New Orleans Saints",
                              "price": 2.2
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Minnesota Vikings",
                              "price": 1.95,
                              "point": -3.0
                          },
                          {
                              "name": "New Orleans Saints",
                              "price": 1.87,
                              "point": 3.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 43.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 43.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "564ff543a5c91fc293f4a2e2185fd9ae",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Atlanta Falcons",
      "away_team": "Cleveland Browns",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Atlanta Falcons",
                              "price": 2.0
                          },
                          {
                              "name": "Cleveland Browns",
                              "price": 1.83
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Atlanta Falcons",
                              "price": 1.91,
                              "point": 1.5
                          },
                          {
                              "name": "Cleveland Browns",
                              "price": 1.91,
                              "point": -1.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 49.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 49.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "1bbebcfe66fcbe87bd3d168a537bfd86",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Baltimore Ravens",
      "away_team": "Buffalo Bills",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Baltimore Ravens",
                              "price": 2.5
                          },
                          {
                              "name": "Buffalo Bills",
                              "price": 1.57
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Baltimore Ravens",
                              "price": 1.87,
                              "point": 3.5
                          },
                          {
                              "name": "Buffalo Bills",
                              "price": 1.95,
                              "point": -3.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.95,
                              "point": 51.5
                          },
                          {
                              "name": "Under",
                              "price": 1.87,
                              "point": 51.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "14b939e4de73f3993936210cbe325697",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "New York Giants",
      "away_team": "Chicago Bears",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Chicago Bears",
                              "price": 2.5
                          },
                          {
                              "name": "New York Giants",
                              "price": 1.57
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Chicago Bears",
                              "price": 1.87,
                              "point": 3.5
                          },
                          {
                              "name": "New York Giants",
                              "price": 1.95,
                              "point": -3.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 39.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 39.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "a6fbcda64cf0ae114e2b9f5a903d8787",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Dallas Cowboys",
      "away_team": "Washington Commanders",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Dallas Cowboys",
                              "price": 1.59
                          },
                          {
                              "name": "Washington Commanders",
                              "price": 2.45
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Dallas Cowboys",
                              "price": 1.83,
                              "point": -3.0
                          },
                          {
                              "name": "Washington Commanders",
                              "price": 2.0,
                              "point": 3.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 42.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 42.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "d019cc903bd06974bfe6a81bbea09990",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Detroit Lions",
      "away_team": "Seattle Seahawks",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Detroit Lions",
                              "price": 1.49
                          },
                          {
                              "name": "Seattle Seahawks",
                              "price": 2.75
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Detroit Lions",
                              "price": 1.95,
                              "point": -4.5
                          },
                          {
                              "name": "Seattle Seahawks",
                              "price": 1.87,
                              "point": 4.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.87,
                              "point": 50.0
                          },
                          {
                              "name": "Under",
                              "price": 1.95,
                              "point": 50.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "4a390c47f97e123b2c921ea852bc5a4e",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Houston Texans",
      "away_team": "Los Angeles Chargers",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Houston Texans",
                              "price": 2.9
                          },
                          {
                              "name": "Los Angeles Chargers",
                              "price": 1.44
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Houston Texans",
                              "price": 1.95,
                              "point": 4.5
                          },
                          {
                              "name": "Los Angeles Chargers",
                              "price": 1.87,
                              "point": -4.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.95,
                              "point": 44.5
                          },
                          {
                              "name": "Under",
                              "price": 1.87,
                              "point": 44.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "90f985f50a4494efaff2c9aed8dd5fc9",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Indianapolis Colts",
      "away_team": "Tennessee Titans",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Indianapolis Colts",
                              "price": 1.59
                          },
                          {
                              "name": "Tennessee Titans",
                              "price": 2.45
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Indianapolis Colts",
                              "price": 2.0,
                              "point": -3.5
                          },
                          {
                              "name": "Tennessee Titans",
                              "price": 1.83,
                              "point": 3.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 42.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 42.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "382c3fc7b3690f68c94a05a00fd45200",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Philadelphia Eagles",
      "away_team": "Jacksonville Jaguars",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Jacksonville Jaguars",
                              "price": 3.3
                          },
                          {
                              "name": "Philadelphia Eagles",
                              "price": 1.36
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Jacksonville Jaguars",
                              "price": 1.91,
                              "point": 6.5
                          },
                          {
                              "name": "Philadelphia Eagles",
                              "price": 1.91,
                              "point": -6.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.95,
                              "point": 48.0
                          },
                          {
                              "name": "Under",
                              "price": 1.87,
                              "point": 48.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "ede5d3a33c5440e94a2414e16b9d558c",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T17:00:00Z",
      "home_team": "Pittsburgh Steelers",
      "away_team": "New York Jets",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "New York Jets",
                              "price": 2.5
                          },
                          {
                              "name": "Pittsburgh Steelers",
                              "price": 1.57
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "New York Jets",
                              "price": 1.87,
                              "point": 3.5
                          },
                          {
                              "name": "Pittsburgh Steelers",
                              "price": 1.95,
                              "point": -3.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 40.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 40.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "f12a4526bee72287c74d49a104c92a1d",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:05:00Z",
      "home_team": "Carolina Panthers",
      "away_team": "Arizona Cardinals",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Arizona Cardinals",
                              "price": 2.1
                          },
                          {
                              "name": "Carolina Panthers",
                              "price": 1.77
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Arizona Cardinals",
                              "price": 1.91,
                              "point": 2.0
                          },
                          {
                              "name": "Carolina Panthers",
                              "price": 1.91,
                              "point": -2.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 42.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 42.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "2e05153aebb4a2bc7c1a066f387de468",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:25:00Z",
      "home_team": "Las Vegas Raiders",
      "away_team": "Denver Broncos",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Denver Broncos",
                              "price": 2.2
                          },
                          {
                              "name": "Las Vegas Raiders",
                              "price": 1.71
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Denver Broncos",
                              "price": 1.95,
                              "point": 2.5
                          },
                          {
                              "name": "Las Vegas Raiders",
                              "price": 1.87,
                              "point": -2.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 46.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 46.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "7b478403b8bb8582cd694e020d203e9b",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-02T20:25:00Z",
      "home_team": "Green Bay Packers",
      "away_team": "New England Patriots",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Green Bay Packers",
                              "price": 1.2
                          },
                          {
                              "name": "New England Patriots",
                              "price": 4.9
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Green Bay Packers",
                              "price": 1.91,
                              "point": -10.0
                          },
                          {
                              "name": "New England Patriots",
                              "price": 1.91,
                              "point": 10.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 40.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 40.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "396b57cac445752ddb7bd83236faf1b4",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-03T00:20:00Z",
      "home_team": "Tampa Bay Buccaneers",
      "away_team": "Kansas City Chiefs",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Kansas City Chiefs",
                              "price": 1.77
                          },
                          {
                              "name": "Tampa Bay Buccaneers",
                              "price": 2.1
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Kansas City Chiefs",
                              "price": 1.91,
                              "point": -2.0
                          },
                          {
                              "name": "Tampa Bay Buccaneers",
                              "price": 1.91,
                              "point": 2.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 45.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 45.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "e65dc45742ff063f0f5bd7062f2406ec",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-04T00:15:00Z",
      "home_team": "San Francisco 49ers",
      "away_team": "Los Angeles Rams",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-09-27T21:27:02Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Los Angeles Rams",
                              "price": 2.1
                          },
                          {
                              "name": "San Francisco 49ers",
                              "price": 1.77
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Los Angeles Rams",
                              "price": 1.91,
                              "point": 2.0
                          },
                          {
                              "name": "San Francisco 49ers",
                              "price": 1.91,
                              "point": -2.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 41.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 41.5
                          }
                      ]
                  }
              ]
          }
      ]
  }
];



