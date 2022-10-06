import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext.js';
import  { db, auth } from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

function LeaderBoard() {

  const titleStyle = {
    color: "#FFD700",
    fontFamily: "'Chakra Petch', sans-serif",
  }

  const cardStyle = {
    boxShadow: "0px 0px 4px rgba(66, 209, 64, 1)"
  }

  const { scuff, setScuff } = useContext(UserContext);
  const { userName, setUserName } = useContext(UserContext);
  const [mainAccountsList, setMainAccountsList ] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "accounts"),
      (collectionSnapshot) => {
        const accounts = [];
        collectionSnapshot.forEach((doc) => {
          accounts.push({
            email: doc.data().email,
            userName: doc.data().userName,
            date: doc.data().date,
            win: doc.data().win,
            loss: doc.data().loss,
            id: doc.id
          });
        });
        const valuesAsceSorted = Object.values(accounts).sort(function(a,b){return b.win - a.win}).slice(0,5);
        setMainAccountsList(valuesAsceSorted);
      },
      (error) => {

      }
    );
    return () => unSubscribe();
  }, []);

  return (
    <React.Fragment>
    <div className="card text-bg-dark" style={cardStyle}>
      <h5 className="card-header" style={titleStyle}>Leader Board</h5>
      <ol className="list-group list-group-flush">
        {mainAccountsList.map(({userName, win}, i) => { 
          if (i === 0) {
            return (
              <React.Fragment>
                <li className='list-group-item list-group-item-dark crowned leaderBoard d-flex justify-content-between align-items-start'>{userName}
                <span class="badge badge-outline">{win}</span></li>
              </React.Fragment>)
          } else
          return (
            <React.Fragment>
              <li className='list-group-item list-group-item-dark leaderBoard d-flex justify-content-between align-items-start'><div>{userName}</div>
              <span class="badge badge-outline">{win}</span></li>
            </React.Fragment>
        )})}
      </ol>
    </div>

  </React.Fragment>

  );
}

export default LeaderBoard;