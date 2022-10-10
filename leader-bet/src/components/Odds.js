import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { setDoc, doc } from 'firebase/firestore';
import { db } from './../firebase.js';
import { v4 } from 'uuid';

function Odds() {

  const titleStyle = {
    color: "#FFD700",
    fontFamily:"Chakra+Petch"
  }

  const cardStyle = {
    boxShadow: "0px 0px 4px rgb(66, 209, 64, 1)"
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ gameOdds, setGameOdds ] = useState([]);
  const {userName, setUserName} = useContext(UserContext);
  const oddsArr = gameOdds;

  function placeBet(team, bet, betId) {
    setDoc(doc(db,'bets', betId),{
      email: userName,
      team: team,
      bet: bet,
      betId: betId,
      id: v4()
    })
  }

  const result = oddsArr.map((element, index) => {
    return element.bookmakers[0].markets[1].outcomes[0].point < 0 ? (
    <table className="table table-dark">
      <thead>
        <tr>
          <th className="border-success">{new Date(element.commence_time).toDateString()}</th>
          <th className="border-success">Spread</th>
          <th className="border-success">Moneyline</th>
          <th className="border-success">Over/Under</th>
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
          <td className="col-3" onClick={() => placeBet(element.bookmakers[0].markets[1].outcomes[1].name, element.bookmakers[0].markets[0].outcomes[1].price, element.id )}>{element.bookmakers[0].markets[0].outcomes[1].price}</td>
          <td className="col-3">{element.bookmakers[0].markets[2].outcomes[1].point}</td>
        </tr>
      </tbody>
    </table>
  ):(
    <table className="table table-dark ">
      <thead>
        <tr>
          <th className="border-success">{new Date(element.commence_time).toDateString()}</th>
          <th className="border-success">Spread</th>
          <th className="border-success">Moneyline</th>
          <th className="border-success">Over/Under</th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[0].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[0].point}</td>
          <td className="col-3" onClick={() => placeBet(element.bookmakers[0].markets[0].outcomes[0].name, element.bookmakers[0].markets[0].outcomes[0].price, element.id )}>{element.bookmakers[0].markets[0].outcomes[0].price}</td>
          <td className="col-3 ">{element.bookmakers[0].markets[2].outcomes[0].point}</td>
        </tr>
        <tr>
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[1].name}</td>
          <td className="col-3">{element.bookmakers[0].markets[1].outcomes[1].point}</td>
          <td className="col-3" onClick={() => placeBet(element.bookmakers[0].markets[1].outcomes[1].name, element.bookmakers[0].markets[0].outcomes[1].price, element.id )}>{element.bookmakers[0].markets[0].outcomes[1].price}</td>
          <td className="col-3">{element.bookmakers[0].markets[2].outcomes[1].point}</td>
        </tr>
      </tbody>
    </table>
  )})
  
  useEffect(() => {
    fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_API_KEY}&regions=us&markets=spreads,totals,h2h&Format=american&bookmakers=draftkings`)
      .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
      .then((jsonifiedResponse) => {
          setGameOdds(jsonifiedResponse)
          setIsLoaded(true)
          console.log(gameOdds);
        })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
    }, [])

    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <React.Fragment>
        <div className="card text-bg-dark oddsCard" style={cardStyle}>
          <div className="card-header text-center" style={titleStyle}>
            <h1 className="oddsTitle">Odds</h1>
          </div>
          <div className="d-flex justify-content-around mt-5 mb-4">
            <div>
              <p className="sports text-center">NFL</p>
            </div>
            <div>
              <p className="sports text-center">EPL</p>
            </div>
            <div>
              <p className="sports text-center">NHL</p>
            </div>
          </div>
          <div>
            {result}
          </div>
        </div>
      </React.Fragment>
      );
    }
  };
  
export default Odds;

const odds = [
  {
      "id": "b40420ba99d4aa4f310eb777747b52f8",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T13:30:00Z",
      "home_team": "Green Bay Packers",
      "away_team": "New York Giants",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Green Bay Packers",
                              "price": 1.28
                          },
                          {
                              "name": "New York Giants",
                              "price": 3.95
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Green Bay Packers",
                              "price": 1.91,
                              "point": -7.5
                          },
                          {
                              "name": "New York Giants",
                              "price": 1.91,
                              "point": 7.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 41.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 41.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "69460fbbe77e0ad8029558f2316e36bd",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Tampa Bay Buccaneers",
      "away_team": "Atlanta Falcons",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Atlanta Falcons",
                              "price": 4.6
                          },
                          {
                              "name": "Tampa Bay Buccaneers",
                              "price": 1.22
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Atlanta Falcons",
                              "price": 1.91,
                              "point": 10.0
                          },
                          {
                              "name": "Tampa Bay Buccaneers",
                              "price": 1.91,
                              "point": -10.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.87,
                              "point": 46.0
                          },
                          {
                              "name": "Under",
                              "price": 1.95,
                              "point": 46.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "2a188c69052b95223e6c6453a6a6d41a",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Buffalo Bills",
      "away_team": "Pittsburgh Steelers",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Buffalo Bills",
                              "price": 1.13
                          },
                          {
                              "name": "Pittsburgh Steelers",
                              "price": 6.5
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Buffalo Bills",
                              "price": 1.95,
                              "point": -14.0
                          },
                          {
                              "name": "Pittsburgh Steelers",
                              "price": 1.87,
                              "point": 14.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 45.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 45.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "2556c5184dc112ad908687cb7dda857a",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Minnesota Vikings",
      "away_team": "Chicago Bears",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Chicago Bears",
                              "price": 3.85
                          },
                          {
                              "name": "Minnesota Vikings",
                              "price": 1.29
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Chicago Bears",
                              "price": 1.91,
                              "point": 7.5
                          },
                          {
                              "name": "Minnesota Vikings",
                              "price": 1.91,
                              "point": -7.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 44.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 44.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "4e7aa1dbca21b96d3181fc856d92d996",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Cleveland Browns",
      "away_team": "Los Angeles Chargers",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Cleveland Browns",
                              "price": 2.15
                          },
                          {
                              "name": "Los Angeles Chargers",
                              "price": 1.74
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Cleveland Browns",
                              "price": 1.91,
                              "point": 2.0
                          },
                          {
                              "name": "Los Angeles Chargers",
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
      "id": "d344c971380c6edc7ac7f8e4df3b7f21",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "New England Patriots",
      "away_team": "Detroit Lions",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Detroit Lions",
                              "price": 2.4
                          },
                          {
                              "name": "New England Patriots",
                              "price": 1.61
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Detroit Lions",
                              "price": 1.95,
                              "point": 3.0
                          },
                          {
                              "name": "New England Patriots",
                              "price": 1.87,
                              "point": -3.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 45.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 45.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "117d8ed91002a56530e3a54a89c528d8",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Jacksonville Jaguars",
      "away_team": "Houston Texans",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Houston Texans",
                              "price": 3.7
                          },
                          {
                              "name": "Jacksonville Jaguars",
                              "price": 1.31
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Houston Texans",
                              "price": 1.91,
                              "point": 7.0
                          },
                          {
                              "name": "Jacksonville Jaguars",
                              "price": 1.91,
                              "point": -7.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.95,
                              "point": 43.5
                          },
                          {
                              "name": "Under",
                              "price": 1.87,
                              "point": 43.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "2ef7d59eaaa9d46824b8f2e5c338c4b0",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "New York Jets",
      "away_team": "Miami Dolphins",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Miami Dolphins",
                              "price": 1.57
                          },
                          {
                              "name": "New York Jets",
                              "price": 2.5
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Miami Dolphins",
                              "price": 1.95,
                              "point": -3.5
                          },
                          {
                              "name": "New York Jets",
                              "price": 1.87,
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
      "id": "5af0af5a6965da4b8080d9cb693b4bc1",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "New Orleans Saints",
      "away_team": "Seattle Seahawks",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "New Orleans Saints",
                              "price": 1.47
                          },
                          {
                              "name": "Seattle Seahawks",
                              "price": 2.85
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "New Orleans Saints",
                              "price": 1.91,
                              "point": -5.0
                          },
                          {
                              "name": "Seattle Seahawks",
                              "price": 1.91,
                              "point": 5.0
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
      "id": "eb8e10400758d1cdd38814e2e65aa5f5",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T17:00:00Z",
      "home_team": "Washington Commanders",
      "away_team": "Tennessee Titans",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Tennessee Titans",
                              "price": 1.77
                          },
                          {
                              "name": "Washington Commanders",
                              "price": 2.1
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Tennessee Titans",
                              "price": 1.91,
                              "point": -2.0
                          },
                          {
                              "name": "Washington Commanders",
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
                              "point": 43.0
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 43.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "675423f4d003af7d5f86920e378885f2",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T20:05:00Z",
      "home_team": "Carolina Panthers",
      "away_team": "San Francisco 49ers",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Carolina Panthers",
                              "price": 3.3
                          },
                          {
                              "name": "San Francisco 49ers",
                              "price": 1.36
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Carolina Panthers",
                              "price": 1.91,
                              "point": 6.5
                          },
                          {
                              "name": "San Francisco 49ers",
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
                              "price": 1.91,
                              "point": 39.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 39.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "c5ee548e267c1ae3b435e3ea15c74f71",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T20:25:00Z",
      "home_team": "Arizona Cardinals",
      "away_team": "Philadelphia Eagles",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Arizona Cardinals",
                              "price": 2.9
                          },
                          {
                              "name": "Philadelphia Eagles",
                              "price": 1.44
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Arizona Cardinals",
                              "price": 1.95,
                              "point": 5.0
                          },
                          {
                              "name": "Philadelphia Eagles",
                              "price": 1.87,
                              "point": -5.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 48.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 48.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "469a879f75369b9144bd06d53e8b2fac",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-09T20:25:00Z",
      "home_team": "Los Angeles Rams",
      "away_team": "Dallas Cowboys",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Dallas Cowboys",
                              "price": 2.9
                          },
                          {
                              "name": "Los Angeles Rams",
                              "price": 1.44
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Dallas Cowboys",
                              "price": 1.91,
                              "point": 5.5
                          },
                          {
                              "name": "Los Angeles Rams",
                              "price": 1.91,
                              "point": -5.5
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.95,
                              "point": 43.0
                          },
                          {
                              "name": "Under",
                              "price": 1.87,
                              "point": 43.0
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "ac258fc5be27d39cf6397585885339f4",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-10T00:20:00Z",
      "home_team": "Baltimore Ravens",
      "away_team": "Cincinnati Bengals",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Baltimore Ravens",
                              "price": 1.57
                          },
                          {
                              "name": "Cincinnati Bengals",
                              "price": 2.5
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Baltimore Ravens",
                              "price": 1.95,
                              "point": -3.5
                          },
                          {
                              "name": "Cincinnati Bengals",
                              "price": 1.87,
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
                              "point": 47.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 47.5
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "id": "fcae205cf6cb686f97ffa9e2752f0cfe",
      "sport_key": "americanfootball_nfl",
      "sport_title": "NFL",
      "commence_time": "2022-10-11T00:15:00Z",
      "home_team": "Kansas City Chiefs",
      "away_team": "Las Vegas Raiders",
      "bookmakers": [
          {
              "key": "draftkings",
              "title": "DraftKings",
              "last_update": "2022-10-07T19:31:26Z",
              "markets": [
                  {
                      "key": "h2h",
                      "outcomes": [
                          {
                              "name": "Kansas City Chiefs",
                              "price": 1.31
                          },
                          {
                              "name": "Las Vegas Raiders",
                              "price": 3.7
                          }
                      ]
                  },
                  {
                      "key": "spreads",
                      "outcomes": [
                          {
                              "name": "Kansas City Chiefs",
                              "price": 1.91,
                              "point": -7.0
                          },
                          {
                              "name": "Las Vegas Raiders",
                              "price": 1.91,
                              "point": 7.0
                          }
                      ]
                  },
                  {
                      "key": "totals",
                      "outcomes": [
                          {
                              "name": "Over",
                              "price": 1.91,
                              "point": 51.5
                          },
                          {
                              "name": "Under",
                              "price": 1.91,
                              "point": 51.5
                          }
                      ]
                  }
              ]
          }
      ]
  }
];

