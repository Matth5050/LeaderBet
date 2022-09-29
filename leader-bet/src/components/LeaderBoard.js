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
        setMainAccountsList(accounts);
      },
      (error) => {

      }
    );
    return () => unSubscribe();
  }, []);


//

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          Leader Board
        </div>
        <ol start="1" className="firstItem">
          {mainAccountsList.map(({userName}, i) => { 
            if (i === 0) {
              return (
                <li className='secondItem px-0'>{userName}</li>)
            } else
            return (
            <li className=''>{userName}</li>
          )})}
        </ol>
      </div>

    </React.Fragment>
  );
}

export default LeaderBoard;