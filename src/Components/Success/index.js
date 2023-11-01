import React, { useEffect, useState } from 'react';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';
import firebase from '../../firebase';

const Success = () => {
  const [player1Name, setPlayer1Name] = useState("Loading...");
  const [player2Name, setPlayer2Name] = useState("Loading...");

  useEffect(() => {
    const CurrentUsers = firebase.firestore().collection("CurrentUsers");

    // Set up a listener to fetch the data from "CurrentUsers" collection in real-time
    const unsubscribe = CurrentUsers.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const playerData = doc.data();
        if (playerData.Player === "P1") {
          setPlayer1Name(playerData.Name);
        } else if (playerData.Player === "P2") {
          setPlayer2Name(playerData.Name);
        }
      });
    });

    // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <img style={{ minWidth: '100px', maxWidth: '300px' }} src={DPWorldLogo} alt="tick" />
        <h1 style={{ paddingRight: '50px', paddingLeft: '50px', color: 'white', fontSize: '20px' }}>Your response has been recorded</h1>
        <h1 style={{ paddingRight: '50px', paddingLeft: '50px', color: 'white', marginTop: '10px' }}>LET'S PLAY!</h1>

        <div style={{ display: 'flex', width: '300px', background: 'black', justifyContent: 'center', alignItems: 'center', border:'1px solid white', borderBottom: 'none'}}>
            <div style={{display: 'flex', width: '150px', justifyContent: 'center', alignItems: 'center'}}>
                <p className='specialFont' style={{ color: 'white' }}>Player 1: </p>
            </div>
            <div style={{display: 'flex', width: '150px', justifyContent: 'center', alignItems: 'center'}}>
                <p className='specialFont' style={{ color: 'white' }}>{player1Name}</p>
            </div>
        </div>

        <div style={{ display: 'flex', width: '300px', background: 'black', justifyContent: 'center', alignItems: 'center', border:'1px solid white'}}>
            <div style={{display: 'flex', width: '150px', justifyContent: 'center', alignItems: 'center'}}>
                <p className='specialFont' style={{ color: 'white' }}>Player 2: </p>
            </div>
            <div style={{display: 'flex', width: '150px', justifyContent: 'center', alignItems: 'center'}}>
                <p className='specialFont' style={{ color: 'white' }}>{player2Name}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Success;