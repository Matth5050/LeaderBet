import React from "react";

function Odds() {
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
            <li class="list-group-item">first game</li>
            <li class="list-group-item">second game</li>
            <li class="list-group-item">third game</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Odds;