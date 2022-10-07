import React, { useContext } from 'react';
import { BetContext } from './UserContext';

function Scores() {

  const cardStyle = {
    boxShadow: "0px 0px 4px rgba(66, 209, 64, 1)"
  }

  const finalStyle = {
    color:"rgb(250, 117, 117)"
  }

  const liveStyle = {
    color:"rgb(66, 209, 64, 1)"
  }

  const titleStyle = {
    color: "#FFD700",
    fontFamily: "'Chakra Petch', sans-serif",
  }

  const {mainScoresList, setMainScoresList} = useContext(BetContext);

  const output = mainScoresList.map((element, index) => {
    return element.completed === true ? (
    <table className="table table-dark scroll">
      <thead>
        <tr>
          <th className="border-success" style={finalStyle}>FINAL</th>
          <th className="border-success"></th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr><td className="border-bottom-0">{element.scores[0].name}</td><td className="text-end border-success">{element.scores[0].score}</td></tr>
        <tr><td className="border-bottom-0">{element.scores[1].name}</td><td className="text-end border-success">{element.scores[1].score}</td></tr>
      </tbody>
    </table>
  ) : (
    <table className="table table-dark scroll">
      <thead>
        <tr>
          <th className="border-success" style={liveStyle}>LIVE</th>
          <th className="border-success"></th>
        </tr>
      </thead>
      <tbody key={index} className="" >
        <tr><td className="border-bottom-0">{element.scores[0].name}</td><td className="text-end border-success">{element.scores[0].score}</td></tr>
        <tr><td className="border-bottom-0">{element.scores[1].name}</td><td className="text-end border-success">{element.scores[1].score}</td></tr>
      </tbody>
    </table>
  )
})

  return (
    <React.Fragment>
    <div className="card text-bg-dark mt-3" style={cardStyle}>
      <h5 className="card-header" style={titleStyle}>
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

