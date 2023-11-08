import { NavLink } from 'react-router-dom';
import React from 'react';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';

const Success = () => {

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center' }}>
        <img style={{ width: '500px'}} src={DPWorldLogo} alt="tick" />
        <h1 style={{ color: 'white', fontSize: '25px', marginTop: '60px' }}>INSTRUCTIONS</h1>


        <p style={{fontSize: '20px', color: '#DA1E59'}}>Join the Race!</p>
        <p style={{fontSize: '15px', color: 'white', marginTop: '-15px', width: '65%'}}>Register as a Racer. Grab your designated joystick and get set for high-octane action!.</p>

        <p style={{fontSize: '20px', color: '#DA1E59'}}>Lights Out, Go Time!</p>
        <p style={{fontSize: '15px', color: 'white', marginTop: '-15px', width: '65%'}}>When those lights go out, your engines roar to life. Rev up your engines and let loose on the track!</p>

        <p style={{fontSize: '20px', color: '#DA1E59'}}>Max Thrills, No Limits!</p>
        <p style={{fontSize: '15px', color: 'white', marginTop: '-15px', width: '65%'}}>It's pedal-to-the-metal time! Conquer every curve, break the records, and feel the adrenaline rush!</p>

        
        
        <p style={{fontSize: '20px', color: '#DA1E59'}}>5 Laps of Epic Excitement!</p>
        <p style={{fontSize: '15px', color: 'white', marginTop: '-15px', width: '65%'}}>Race against the clock. Aim for the leaderboard's glory!</p>
        <p style={{fontSize: '15px', color: 'white', marginTop: '-12px'}}>Can you reach the top and become a legend?</p>


        

          <NavLink to="/Player1Registration" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '40px'}}>
                <button id="buttontext" style={{background: 'white', height: '70px', padding: '10px', width: '250px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px', color: '#1E1450', border: '1px solid transparent'}}>LETS GO!</button>
            </div>
          </NavLink>

    </div>
  )
}

export default Success;