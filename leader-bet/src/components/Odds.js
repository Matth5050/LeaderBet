import React, { useEffect, useState } from "react";

function Odds() {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const oddsArr = test; //dummy data
  
  const result = oddsArr.map((element, index) => {
    return element.bookmakers[0].markets[0].outcomes[0].point < 0 ? (
      <div>
        <div className="test1">
          <span className="mx-3">{new Date(element.commence_time).toDateString()}</span><span>Spread</span><span></span>
        </div>
        <li key={index} className="list-group-item">
          <div>{element.bookmakers[0].markets[0].outcomes[0].name + " " + element.bookmakers[0].markets[0].outcomes[0].point}</div> 
          <div>{element.bookmakers[0].markets[0].outcomes[1].name + " " + element.bookmakers[0].markets[0].outcomes[1].point}</div>
        </li>
      </div>
      ):(
      <div>
        <div className="test1">
            <span className="mx-3">{new Date(element.commence_time).toDateString()}</span>
          </div>
        <li key={index} className="list-group-item">
          <div>{element.bookmakers[0].markets[0].outcomes[1].name + " " + element.bookmakers[0].markets[0].outcomes[1].point}</div>
          <div>{element.bookmakers[0].markets[0].outcomes[0].name + " " + element.bookmakers[0].markets[0].outcomes[0].point}</div> 
        </li>
      </div>
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
        <div className="card">
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
            <ul className="list-group list-group-flush">
              {result}
            </ul>
          </div>
        </div>
      </React.Fragment>
      );
      }
  
export default Odds;

let test = [
  {
    "id": "17992ef53890f217f965a6918e65c5d2",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "New England Patriots",
    "away_team": "Baltimore Ravens",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Baltimore Ravens",
                "price": 1.95,
                "point": -3
              },
              {
                "name": "New England Patriots",
                "price": 1.87,
                "point": 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "a89530dea60b9acaca76dbe323c8554c",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Miami Dolphins",
    "away_team": "Buffalo Bills",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Buffalo Bills",
                "price": 1.91,
                "point": -5
              },
              {
                "name": "Miami Dolphins",
                "price": 1.91,
                "point": 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "6f06b7dfa7d80484cbeb9749a3ed9d93",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Carolina Panthers",
    "away_team": "New Orleans Saints",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Carolina Panthers",
                "price": 1.95,
                "point": 2.5
              },
              {
                "name": "New Orleans Saints",
                "price": 1.87,
                "point": -2.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "38dd177316f24b9a32b49338e344824a",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Chicago Bears",
    "away_team": "Houston Texans",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Chicago Bears",
                "price": 1.95,
                "point": -3
              },
              {
                "name": "Houston Texans",
                "price": 1.87,
                "point": 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "892bb6a5ed8eec1ad4126a51cbcc969a",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "New York Jets",
    "away_team": "Cincinnati Bengals",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Cincinnati Bengals",
                "price": 1.91,
                "point": -6
              },
              {
                "name": "New York Jets",
                "price": 1.91,
                "point": 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "c4ae3193bc769d3df148ec50ae8327a7",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Minnesota Vikings",
    "away_team": "Detroit Lions",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Detroit Lions",
                "price": 1.87,
                "point": 6
              },
              {
                "name": "Minnesota Vikings",
                "price": 1.95,
                "point": -6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "d970f0b785affa9263caa4eb822dfe24",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Indianapolis Colts",
    "away_team": "Kansas City Chiefs",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Indianapolis Colts",
                "price": 1.91,
                "point": 5.5
              },
              {
                "name": "Kansas City Chiefs",
                "price": 1.91,
                "point": -5.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "38c7c615df68ea629878861a15b319a6",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Tennessee Titans",
    "away_team": "Las Vegas Raiders",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Las Vegas Raiders",
                "price": 1.91,
                "point": -2
              },
              {
                "name": "Tennessee Titans",
                "price": 1.91,
                "point": 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fa22c6a92de71d8c32f0948dcc4c86fa",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T17:00:00Z",
    "home_team": "Washington Commanders",
    "away_team": "Philadelphia Eagles",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Philadelphia Eagles",
                "price": 1.95,
                "point": -6.5
              },
              {
                "name": "Washington Commanders",
                "price": 1.87,
                "point": 6.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cd900be6032ed66cd7f8af1ce03e9194",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T20:05:00Z",
    "home_team": "Los Angeles Chargers",
    "away_team": "Jacksonville Jaguars",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Jacksonville Jaguars",
                "price": 1.91,
                "point": 3
              },
              {
                "name": "Los Angeles Chargers",
                "price": 1.91,
                "point": -3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "15cb56c89a5a12f382cc28022735099a",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T20:25:00Z",
    "home_team": "Arizona Cardinals",
    "away_team": "Los Angeles Rams",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Arizona Cardinals",
                "price": 1.87,
                "point": 3.5
              },
              {
                "name": "Los Angeles Rams",
                "price": 1.95,
                "point": -3.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "38c009fed06bc3f00e20a80c79510795",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T20:25:00Z",
    "home_team": "Seattle Seahawks",
    "away_team": "Atlanta Falcons",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Atlanta Falcons",
                "price": 1.91,
                "point": 1
              },
              {
                "name": "Seattle Seahawks",
                "price": 1.91,
                "point": -1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "9ec51cb3a3909a654d5a8b232b16a60d",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-25T20:25:00Z",
    "home_team": "Tampa Bay Buccaneers",
    "away_team": "Green Bay Packers",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Green Bay Packers",
                "price": 1.91,
                "point": 1.5
              },
              {
                "name": "Tampa Bay Buccaneers",
                "price": 1.91,
                "point": -1.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "a0abb04fbe51f57f6aa82e5c0a90e835",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-26T00:20:00Z",
    "home_team": "Denver Broncos",
    "away_team": "San Francisco 49ers",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Denver Broncos",
                "price": 1.91,
                "point": 1.5
              },
              {
                "name": "San Francisco 49ers",
                "price": 1.91,
                "point": -1.5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "24c217c16955087e9498708f6b8bc392",
    "sport_key": "americanfootball_nfl",
    "sport_title": "NFL",
    "commence_time": "2022-09-27T00:15:00Z",
    "home_team": "New York Giants",
    "away_team": "Dallas Cowboys",
    "bookmakers": [
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2022-09-23T21:59:01Z",
        "markets": [
          {
            "key": "spreads",
            "outcomes": [
              {
                "name": "Dallas Cowboys",
                "price": 1.91,
                "point": 1
              },
              {
                "name": "New York Giants",
                "price": 1.91,
                "point": -1
              }
            ]
          }
        ]
      }
    ]
  }
];

// test.forEach(function(element) {
// console.log(element.bookmakers[0].markets[0].outcomes[0].name + ' ' + element.bookmakers[0].markets[0].outcomes[0].point + " "  +  element.bookmakers[0].markets[0].outcomes[1].name + " " +  element.bookmakers[0].markets[0].outcomes[1].point)
// })