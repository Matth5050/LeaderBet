import React, { useEffect, useState } from "react";

function Odds() {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameOdds, setGameOdds] = useState([]);
  const oddsArr = gameOdds;
  
  // function displayOdds() {
  //   oddsArr.forEach(function(element) {
  //     "<li>" + element.bookmakers[0].markets[0].outcomes[0].name + ' ' + element.bookmakers[0].markets[0].outcomes[0].point + " "  +  element.bookmakers[0].markets[0].outcomes[1].name + " " +  element.bookmakers[0].markets[0].outcomes[1].point + "</li>"
  //     })
  // }

  const listGames = oddsArr.map((element) =>
    <li className="list-group-item">{element.bookmakers[0].markets[0].outcomes[0].name + ' ' + element.bookmakers[0].markets[0].outcomes[0].point + " "  +  element.bookmakers[0].markets[0].outcomes[1].name + " " +  element.bookmakers[0].markets[0].outcomes[1].point}</li>
  );
 


  useEffect(() => {
    fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_API_KEY}&regions=us&markets=spreads&Format=american&bookmakers=draftkings`)
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
            <ul class="list-group list-group-flush">
              {listGames}
            </ul>
          </div>
        </div>
      </React.Fragment>
      );
    }
  }




  

export default Odds;


{/* <React.Fragment>
          <h1>spreads</h1>
          <ul>
            {console.log({gameOdds}.gameOdds)}
            {/* {gameOdds.map((article, index) =>
              <li key={index}>
                <h3>{article.home_team}</h3>
                <p>{article.away_team}</p>
                <p>{article.bookmakers.markets.outcomes}</p>
              </li>
            )} */}
        //   </ul>
        // </React.Fragment> */}