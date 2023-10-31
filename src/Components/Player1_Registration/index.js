import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../1_Assets/main.css';
import DPWorldLogo from '../1_Assets/DPWorldLogo.png';

const Player1Registration = () =>{
    const navigate = useNavigate();
    
    function HandleSubmit(){
        const docId = "NAkbomUuiHLMXgFzshiv";
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
        // eslint-disable-next-line
        if (document.getElementById("no").value === "" ||  document.getElementById("no").value.slice(0,3) != 971 ){
            console.log('Hello')
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
            return;
        }

        const dataToUpdate = {
            Name: Name, // Update Name field
            Email: Email, // Update Email field
            Player: "P1", // Update Player field
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
            Player:"P1",
            time: firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>{
            navigate('/Player2Registration')
        })
    }
    
    return( 
            
        <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100%", justifyContent:"center", alignItems:"center"}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '18px', paddingTop:'45px'}}>
                    <img style={{minWidth: '100px', maxWidth: '300px'}} src={DPWorldLogo} alt="NBALogo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vh', marginBottom:'10px'}}>
                    <h1 className='specialFont' style={{paddingRight: '50px', paddingLeft: '50px', fontSize: '20px', color: 'black'}}>PLAYER 1 REGISTRATION</h1>
                </div>
                
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" placeholder='NAME' id="Name" style={{background:"transparent", borderRadius: '0px', border:"1px solid black", textAlign: 'center', marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
                </div>
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="email" placeholder='EMAIL' id='email' style={{background:"transparent", borderRadius: '0px', border:"1px solid black", textAlign: 'center', marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                </div>
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="number" placeholder='MOBILE (971 xx xxx xxxx)' id='no' style={{background:"transparent", borderRadius: '0px', border:"1px solid black", textAlign: 'center', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                </div>

                <div style={{height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <p id='error' style={{color:"red", fontSize: '10px'}}></p>
                </div>

                <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', marginBottom:'60px'}} onClick={HandleSubmit}>        
                    <button>Submit</button>
                </div>

            </div>
            
        </div>
    )
}

export default Player1Registration;