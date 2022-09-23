import React, { useState, useEffect } from 'react';

function NFL() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameOdds, setGameOdds] = useState([]);


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
          </ul>
        </React.Fragment>
      );
    }
  }

export default NFL;

// 035b26c711b90128b1e88cb588b6a7c5
//fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_API_KEY}&regions=us&markets=spreads&Format=american&bookmakers=draftkings`)
