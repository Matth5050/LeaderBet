import React, { useState, useEffect, useContext } from 'react';
import { BetContext, UserContext } from './UserContext.js';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import  { db } from './../firebase.js';

function BetSlip() {

  const cardStyle = {
    boxShadow: "0px 0px 4px rgba(66, 209, 64, 1)"
  }

  const titleStyle = {
    color: "#FFD700",
    fontFamily: "'Chakra Petch', sans-serif",
  }

  const [ mainBetList, setMainBetsList ] = useState([]);
  const [ lossCount, setLossCount ] = useState(null);
  const { mainScoresList, setMainScoresList } = useContext(BetContext);
  const { userName, setUserName } = useContext(UserContext);
  const [ winCount, setWinCount ] = useState(null);
  const docRef = doc(db, "accounts", userName);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      doc(db, "accounts", userName),
      getDoc(docRef).then((doc) => {
        const test = doc.data().win;
        setWinCount(test);
      },(error) => {
        console.log("error with the betslip!")
      }, 
  ));
  return () => unSubscribe();
  }, [])

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
            id: doc.data().id,
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

  

  // determines if players bets won/lost
  useEffect(() => {
      mainBetList.forEach(function(element) {
      mainScoresList.forEach(function(item) {
        if (element.betId === item.id) {
          if (item.completed === true) {
            if (item.scores[0].score < item.scores[1].score && item.scores[1].name === element.team) {
              const idCont = element.betId;
              const countRef = doc(db, "accounts", userName);
              const betRef = doc(db, "bets", idCont);
              const stateUpdate = async() => {
                const test = (winCount + 1);
                await setWinCount(test);
                await updateDoc(countRef, {
                  win: test
                });
              };
              stateUpdate();
              

              deleteDoc(betRef)
                  .then(() => {
                      console.log("Entire Document has been deleted successfully.")
                  })
                  .catch(error => {
                      console.log(error);
                  })

            } else if (item.scores[0].score > item.scores[1].score && item.scores[0].name === element.team) {
                setWinCount(winCount + 1);
                const idCont = element.betId;
                const countRef = doc(db, "accounts", userName);
                const betRef = doc(db, "bets", idCont);
                
                updateDoc(countRef, {
                  win: winCount
                });

                deleteDoc(betRef)
                  .then(() => {
                      console.log("Entire Document has been deleted successfully.")
                  })
                  .catch(error => {
                      console.log(error);
                  })

            } else {
                console.log("loser");
                setWinCount(lossCount + 1);
                  const countRef = doc(db, "accounts", userName);
                  
                  updateDoc(countRef, {
                    loss: lossCount
                });
            }
          }
        } 
      })
    })
  }, [mainScoresList]);

  const betsList = mainBetList.map((element,index) => {
    return (
      <React.Fragment>
        <table className='table table-dark'>
          <tbody key={index}>
            <tr className='border-success'><td>{element.team} {element.bet}</td></tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  })
  
  return (
    <React.Fragment>
      <div class="card mt-3 text-bg-dark" style={cardStyle}>
        <h5 class="card-header" style={titleStyle}>Open Bets</h5>
        <div>
          {betsList}
        </div>
      </div>
    </React.Fragment>
  )
}

export default BetSlip;