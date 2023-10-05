import react from "react"
import * as React from 'react';
import Footer from "../components/Footer";
import './css/contact.css'
import Picture from '../assets/electrical-services-IMG/ele-installation.jpg'
import { TextField } from "@mui/material";

function Contact(){
    return(
        <>
         <h1 className="h1-contact">Get in Touch with us</h1>
        <div className="contact">
        
       
        <div className="picture-container">
        <img src={Picture} alt="electricity-installation" className="picture"/>
        <h3>Talk to our support Team find out how we can help you</h3>
        <hr className="hr" />
        <p>Fill out your information and an Odims Engineering representative will 
        reach out to you. Have a simple question? Check out our FAQ.</p>
        </div>



        <div className="form">
    
        <table>
    <tr>
    <td><TextField id="outlined-basic" label="Name" variant="outlined" className="textfield" /></td>
    <td><TextField id="outlined-basic" label="Surname" variant="outlined" className="textfield"/></td>
    </tr>
    <tr>
        <td> <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" className="textfield"/></td>
   <td> <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="cell number" max="10" className="textfield"/></td>
    </tr>
    <tr>
        
    </tr>

</table>
        
        </div>
        </div>
        <div>
        <Footer/>
        </div>
        </>
    )
}

export default Contact