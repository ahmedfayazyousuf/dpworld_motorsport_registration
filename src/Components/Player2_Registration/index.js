import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../1_Assets/main.css';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';

const Player2Registration = () =>{
    const navigate = useNavigate();
    
    function HandleSubmit(){
        const docId = "kxRFF0co7QdYrHyjFFJg";
        const Users = firebase.firestore().collection("Users");
        const CurrentUsers = firebase.firestore().collection("CurrentUsers");

        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        
        // console.log(Email)

        if(Name === ''){
            document.getElementById('error').innerHTML = "PLEASE ENTER YOUR NAME"
            return;
        }

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID EMAIL"
            return;
        }

        // eslint-disable-next-line
        if (document.getElementById("no").value === "" ||  document.getElementById("no").value.slice(0,3) != 971 ){
            console.log('Hello')
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
            return;
        }

        const dataToUpdate = {
            Name: Name, 
            Email: Email,
            Player: "P2",
            Lap1:0,
            Lap2:0,
            Lap3:0,
            Lap4:0,
            Lap5:0,
            Score:0,
          };

        CurrentUsers.doc(docId)
            .set(dataToUpdate, { merge: true })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });

        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,
            Player:"P2",
            Score:0,
            time: firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>{
            navigate('/Success')
        })
    }
    
    return( 
            
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: '100vh'}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '5px', paddingTop:'45px'}}>
                    <img style={{width: '100%'}} src={DPWorldLogo} alt="NBALogo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh', marginBottom:'10px'}}>
                    <h1 className='specialFont' style={{paddingRight: '50px', paddingLeft: '50px', fontSize: '25px', color: 'white'}}>REGISTRATION – PLAYER 2</h1>
                </div>
                
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input className='specialFont' type="text" placeholder='NAME' id="Name" style={{opacity: '0.6', background:"white", border:"1px solid black", textAlign: 'center', marginBottom:'15px', width:"100%", height:'70px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px'}}/> 
                </div>
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input className='specialFont' type="email" placeholder='EMAIL' id='email' style={{opacity: '0.6', background:"white", border:"1px solid black", textAlign: 'center', marginBottom:'15px', width:"100%", height:'70px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' , borderRadius: '120px', fontSize: '25px'}} />
                </div>
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input className='specialFont' type="number" placeholder='MOBILE PHONE' id='no' style={{ opacity: '0.6', background:"white", border:"1px solid black", textAlign: 'center', width:"100%", height:'70px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px' }} />
                </div>

                <div style={{height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <p id='error' style={{color:"red", fontSize: '10px'}}></p>
                </div>

                <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginBottom:'60px'}} onClick={HandleSubmit}>
                    <button className='specialFont' id="buttontext" style={{background: 'white', height: '70px', padding: '10px', width: '220px', backgroundColor: 'white', borderRadius: '120px', fontSize: '25px', color: '#1E1450'}}>REGISTER</button>
                </div>

            </div>
            
        </div>
    )
}

export default Player2Registration;