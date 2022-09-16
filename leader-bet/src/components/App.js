import React from 'react';
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import Odds from './Odds';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-9'>
            <Odds />
          </div>
          <div className='col-3'>
            <LeaderBoard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
