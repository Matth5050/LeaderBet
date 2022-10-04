import React, { useContext, useEffect } from 'react';
import { BetContext } from './UserContext';

function Scores() {

  const {mainScoresList, setMainScoresList} = useContext(BetContext);


  const output = mainScoresList.map((element, index) => {
    return element.completed === true ? (
    <table className="table table-dark scroll">
      <thead>
        <tr>
          <th className="">Final</th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr><td className="">{element.scores[0].name}</td><td className="text-end">{element.scores[0].score}</td></tr>
        <tr><td className="">{element.scores[1].name}</td><td className="text-end">{element.scores[1].score}</td></tr>
      </tbody>
    </table>
  ) : (
    <table className="table table-dark scroll">
      <thead>
        <tr>
          <th className="">LIVE</th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr><td className="">{element.scores[0].name}</td><td className="text-end">{element.scores[0].score}</td></tr>
        <tr><td className="">{element.scores[1].name}</td><td className="text-end">{element.scores[1].score}</td></tr>
      </tbody>
    </table>
  )
})


  return (
    <React.Fragment>
    <div className="card text-bg-dark mt-1">
      <h5 className="card-header">
        Scores
      </h5>
      <div className="scrollable">
       {output}
      </div>
    </div>
  </React.Fragment>
  );
}

export default Scores;

// const nums = [
//   {
//       "id": "da9ee648135469a635e468728c6c8643",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T13:28:40Z",
//       "completed": false,
//       "home_team": "New Orleans Saints",
//       "away_team": "Minnesota Vikings",
//       "scores": [
//           {
//               "name": "New Orleans Saints",
//               "score": "25"
//           },
//           {
//               "name": "Minnesota Vikings",
//               "score": "28"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "564ff543a5c91fc293f4a2e2185fd9ae",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:00:00Z",
//       "completed": true,
//       "home_team": "Atlanta Falcons",
//       "away_team": "Cleveland Browns",
//       "scores": [
//           {
//               "name": "Atlanta Falcons",
//               "score": "23"
//           },
//           {
//               "name": "Cleveland Browns",
//               "score": "20"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "a6fbcda64cf0ae114e2b9f5a903d8787",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:00:00Z",
//       "completed": true,
//       "home_team": "Dallas Cowboys",
//       "away_team": "Washington Commanders",
//       "scores": [
//           {
//               "name": "Dallas Cowboys",
//               "score": "25"
//           },
//           {
//               "name": "Washington Commanders",
//               "score": "10"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "90f985f50a4494efaff2c9aed8dd5fc9",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:00:00Z",
//       "completed": true,
//       "home_team": "Indianapolis Colts",
//       "away_team": "Tennessee Titans",
//       "scores": [
//           {
//               "name": "Indianapolis Colts",
//               "score": "17"
//           },
//           {
//               "name": "Tennessee Titans",
//               "score": "24"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "382c3fc7b3690f68c94a05a00fd45200",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:10Z",
//       "completed": true,
//       "home_team": "Philadelphia Eagles",
//       "away_team": "Jacksonville Jaguars",
//       "scores": [
//           {
//               "name": "Philadelphia Eagles",
//               "score": "29"
//           },
//           {
//               "name": "Jacksonville Jaguars",
//               "score": "21"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "ede5d3a33c5440e94a2414e16b9d558c",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:19Z",
//       "completed": true,
//       "home_team": "Pittsburgh Steelers",
//       "away_team": "New York Jets",
//       "scores": [
//           {
//               "name": "Pittsburgh Steelers",
//               "score": "20"
//           },
//           {
//               "name": "New York Jets",
//               "score": "24"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "1bbebcfe66fcbe87bd3d168a537bfd86",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:34Z",
//       "completed": true,
//       "home_team": "Baltimore Ravens",
//       "away_team": "Buffalo Bills",
//       "scores": [
//           {
//               "name": "Baltimore Ravens",
//               "score": "20"
//           },
//           {
//               "name": "Buffalo Bills",
//               "score": "23"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "d019cc903bd06974bfe6a81bbea09990",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:44Z",
//       "completed": true,
//       "home_team": "Detroit Lions",
//       "away_team": "Seattle Seahawks",
//       "scores": [
//           {
//               "name": "Detroit Lions",
//               "score": "45"
//           },
//           {
//               "name": "Seattle Seahawks",
//               "score": "48"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "14b939e4de73f3993936210cbe325697",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:58Z",
//       "completed": true,
//       "home_team": "New York Giants",
//       "away_team": "Chicago Bears",
//       "scores": [
//           {
//               "name": "New York Giants",
//               "score": "20"
//           },
//           {
//               "name": "Chicago Bears",
//               "score": "12"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "4a390c47f97e123b2c921ea852bc5a4e",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T17:02:59Z",
//       "completed": true,
//       "home_team": "Houston Texans",
//       "away_team": "Los Angeles Chargers",
//       "scores": [
//           {
//               "name": "Houston Texans",
//               "score": "24"
//           },
//           {
//               "name": "Los Angeles Chargers",
//               "score": "34"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "f12a4526bee72287c74d49a104c92a1d",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T20:06:00Z",
//       "completed": true,
//       "home_team": "Carolina Panthers",
//       "away_team": "Arizona Cardinals",
//       "scores": [
//           {
//               "name": "Carolina Panthers",
//               "score": "16"
//           },
//           {
//               "name": "Arizona Cardinals",
//               "score": "26"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "7b478403b8bb8582cd694e020d203e9b",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T20:25:28Z",
//       "completed": true,
//       "home_team": "Green Bay Packers",
//       "away_team": "New England Patriots",
//       "scores": [
//           {
//               "name": "Green Bay Packers",
//               "score": "27"
//           },
//           {
//               "name": "New England Patriots",
//               "score": "24"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "2e05153aebb4a2bc7c1a066f387de468",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-02T20:27:52Z",
//       "completed": true,
//       "home_team": "Las Vegas Raiders",
//       "away_team": "Denver Broncos",
//       "scores": [
//           {
//               "name": "Las Vegas Raiders",
//               "score": "32"
//           },
//           {
//               "name": "Denver Broncos",
//               "score": "23"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "396b57cac445752ddb7bd83236faf1b4",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-03T00:22:55Z",
//       "completed": false,
//       "home_team": "Tampa Bay Buccaneers",
//       "away_team": "Kansas City Chiefs",
//       "scores": [
//           {
//               "name": "Tampa Bay Buccaneers",
//               "score": "17"
//           },
//           {
//               "name": "Kansas City Chiefs",
//               "score": "31"
//           }
//       ],
//       "last_update": "2022-10-03T02:26:27Z"
//   },
//   {
//       "id": "e65dc45742ff063f0f5bd7062f2406ec",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-04T00:15:00Z",
//       "completed": false,
//       "home_team": "San Francisco 49ers",
//       "away_team": "Los Angeles Rams",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "89eab640e6f89d1e29686a92fc221fd9",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-07T00:15:00Z",
//       "completed": false,
//       "home_team": "Denver Broncos",
//       "away_team": "Indianapolis Colts",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "b40420ba99d4aa4f310eb777747b52f8",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T13:30:00Z",
//       "completed": false,
//       "home_team": "Green Bay Packers",
//       "away_team": "New York Giants",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "2a188c69052b95223e6c6453a6a6d41a",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "Buffalo Bills",
//       "away_team": "Pittsburgh Steelers",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "2556c5184dc112ad908687cb7dda857a",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "Minnesota Vikings",
//       "away_team": "Chicago Bears",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "4e7aa1dbca21b96d3181fc856d92d996",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "Cleveland Browns",
//       "away_team": "Los Angeles Chargers",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "d344c971380c6edc7ac7f8e4df3b7f21",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "New England Patriots",
//       "away_team": "Detroit Lions",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "117d8ed91002a56530e3a54a89c528d8",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "Jacksonville Jaguars",
//       "away_team": "Houston Texans",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "5af0af5a6965da4b8080d9cb693b4bc1",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "New Orleans Saints",
//       "away_team": "Seattle Seahawks",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "eb8e10400758d1cdd38814e2e65aa5f5",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T17:00:00Z",
//       "completed": false,
//       "home_team": "Washington Commanders",
//       "away_team": "Tennessee Titans",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "675423f4d003af7d5f86920e378885f2",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T20:05:00Z",
//       "completed": false,
//       "home_team": "Carolina Panthers",
//       "away_team": "San Francisco 49ers",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "c5ee548e267c1ae3b435e3ea15c74f71",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T20:25:00Z",
//       "completed": false,
//       "home_team": "Arizona Cardinals",
//       "away_team": "Philadelphia Eagles",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "469a879f75369b9144bd06d53e8b2fac",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-09T20:25:00Z",
//       "completed": false,
//       "home_team": "Los Angeles Rams",
//       "away_team": "Dallas Cowboys",
//       "scores": null,
//       "last_update": null
//   },
//   {
//       "id": "ac258fc5be27d39cf6397585885339f4",
//       "sport_key": "americanfootball_nfl",
//       "sport_title": "NFL",
//       "commence_time": "2022-10-10T00:20:00Z",
//       "completed": false,
//       "home_team": "Baltimore Ravens",
//       "away_team": "Cincinnati Bengals",
//       "scores": null,
//       "last_update": null
//   }
