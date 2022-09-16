import React from 'react';
import Header from './Header';
import LeaderBoard from './LeaderBoard';
import Odds from './Odds';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <LeaderBoard />
      <Odds />
    </React.Fragment>
  );
}

export default App;
