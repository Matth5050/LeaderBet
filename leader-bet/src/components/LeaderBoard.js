import React, { useState, useEffect } from 'react';
import  { db, auth } from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

function LeaderBoard() {

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
        const valuesAsceSorted = Object.values(accounts).sort(function(a,b){return b.win - a.win}).slice(0,10);
        console.log(valuesAsceSorted);
        setMainAccountsList(valuesAsceSorted);
      },
      (error) => {

      }
    );
    return () => unSubscribe();
  }, []);

  return (
    <React.Fragment>
    <div className="card text-bg-dark">
      <div className="card-header ">
        Leader Board
      </div>
      <ol className="list-group list-group-flush">
        {mainAccountsList.map(({userName, win}, i) => { 
          if (i === 0) {
            return (
              <li className='list-group-item list-group-item-dark crowned leaderBoard leaderBoard d-flex justify-content-between align-items-start'>{userName}
              <span class="badge bg-primary rounded-pill">{win}</span></li>)
          } else
          return (
            <React.Fragment>
          <li className='list-group-item list-group-item-dark leaderBoard d-flex justify-content-between align-items-start'><div>{userName}</div>
          <span class="badge bg-primary rounded-pill">{win}</span></li>
          
          </React.Fragment>
        )})}
      </ol>
    </div>

  </React.Fragment>

  );
}

export default LeaderBoard;