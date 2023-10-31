import DPWorldLogo from '../1_Assets/DPWorldLogo.png'

const Success = () => {
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
            <img style={{minWidth: '100px', maxWidth: '300px'}} src={DPWorldLogo} alt="tick"/>
            <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'black', fontSize: '20px'}}>Your response has been recorded</h1>
            <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'black', marginTop: '10px'}}>LET'S PLAY!</h1>
        </div>
    )
}

export default Success;