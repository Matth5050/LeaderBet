import React from "react";

function Odds() {
  return (
    <React.Fragment>
      <div className="card">
        <div className="buttoneContaienr">
          <div>
            <button className="sports">NFL</button>
          </div>
          <div>
            <button className="sports">MLB</button>
          </div>
          <div>
            <button className="sports">NHL</button>
          </div>
        </div>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Odds;