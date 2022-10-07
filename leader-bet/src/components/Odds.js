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
          <td className="col-3">{element.bookmakers[0].markets[0].outcomes[1].price}</td>
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



