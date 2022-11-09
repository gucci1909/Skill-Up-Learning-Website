import {CgPhone} from "react-icons/cg"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
const ContactIcon=()=>{
    const [flag,setFlag]=useState(false);
    return (
        <section className="contactIcon">
            <div style={{height:"60px",width:"60px",borderRadius:"50%",backgroundColor:"darkblue",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setFlag(!flag)}>
        {flag? <AiOutlineClose style={{fontSize:"35px",color:"white"}}  />:  <CgPhone style={{fontSize:"35px",color:"white"}} />}  
            </div>
           {flag? <div className="contactSection" style={{textAlign:"justify",paddingLeft:"15px",paddingRight:"15px"}}>
            <h1>Have a question related to courses?</h1>
            <p>Our team will answer all of your questions.</p>
            <button style={{height:"30px",width:"90%",borderRadius:"5px",color:"white",backgroundColor:"darkblue",border:"none",fontSize:"18px",marginBottom:"15px"}}>Get a call from us</button><br />
            <span>or call us :</span> <span>+91 8080808080</span>
           </div>:null}
        </section>
    )
}
export default ContactIcon;