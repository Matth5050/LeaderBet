import React, { useState, useEffect, useContext } from 'react';
import { BetContext, UserContext } from './UserContext.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import  { db, auth } from './../firebase.js';

function BetSlip() {

  const [mainBetList, setMainBetsList ] = useState([]);
 
  const [lossCount, setLossCount ] = useState(null);
  const {mainScoresList, setMainScoresList} = useContext(BetContext);
  const { userName, setUserName } = useContext(UserContext);

  const winLoss = doc(db, "accounts", "5uuw2GOpvVWC9y8BztMb");
  
  // const wStorage = getDoc(winLoss)
  //   .then((doc) => {
  //     setWinCount(doc.data().win);
  //   })

    const [winCount, setWinCount ] = useState(null);
 
  //gets bets from bets db
  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "bets"),
      (collectionSnapshot) => {
        const bets = [];
        collectionSnapshot.forEach((doc) => {
          bets.push({
            team: doc.data().team,
            bet: doc.data().bet,
            betId: doc.data().betId,
            email: doc.data().email
          });
        });
        setMainBetsList(bets);
      },
      (error) => {
        console.log("error with the betslip!")
      }
    );
    return () => unSubscribe();
  }, []);

  // function increment() {
    
  // }

  // determines if players bets won/lost
  useEffect(() => {
    mainBetList.forEach(function(element) {
      mainScoresList.forEach(function(item) {
        if (element.betId === item.id) {
          if (item.completed === true) {
            if (item.scores[0].score < item.scores[1].score && item.scores[1].name === element.team) {
              // increment();
              setWinCount(winCount + 1);
              console.log("here");
              console.log(winCount);
              const countRef = doc(db, "accounts", "5uuw2GOpvVWC9y8BztMb");

              updateDoc(countRef, {
                win: winCount
              });

            } else if (item.scores[0].score > item.scores[1].score && item.scores[0].name === element.team) {
              console.log(item.scores[0].name);
            } else {
              console.log("loser");
            }
          }
        } 
      })
    })
  }, [mainScoresList]);



  const betsList = mainBetList.map((element,index) => {
    return (
      <p>{element.team} {element.bet}</p>
    )
  })
  
  return (
    <React.Fragment>
      <div class="card mt-1 text-bg-dark">
        <h5 class="card-header">Open Bets</h5>
        <div className="card-body">
            {betsList}
        </div>
      </div>
    </React.Fragment>
  )
}

export default BetSlip;