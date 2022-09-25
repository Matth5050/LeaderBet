import React from "react";

function LeaderBoard() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          Leader Board
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Player 1</li>
          <li className="list-group-item">Player 2</li>
          <li className="list-group-item">Player 3</li>
        </ul>
      </div>

    </React.Fragment>
  );
}

export default LeaderBoard;