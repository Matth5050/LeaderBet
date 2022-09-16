import React from "react";

function LeaderBoard() {
  return (
    <React.Fragment>
      <div class="card">
        <div class="card-header">
          Leader Board
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Player 1</li>
          <li class="list-group-item">Player 2</li>
          <li class="list-group-item">Player 3</li>
        </ul>
      </div>

    </React.Fragment>
  );
}

export default LeaderBoard;