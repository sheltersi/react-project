import react from "react"
import * as React from 'react';
import Button  from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import Logo from '../assets/electrical-services-IMG/Best-logo.png'
import {GrFacebook} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {FaSquareInstagram} from 'react-icons/fa6';
import {TfiEmail} from 'react-icons/tfi';


export default function Footer(){
    return(
        <>
            <div className="footer">
<div className="footer-contents">
<div className="footer-logo">
<img src={Logo} alt="logo" className="footer-nav-logo"/><div className="footer-logo-text">Odims Engineering</div>
</div>
{/* <div class="footer-socials inline-flex items-baseline"></div> */}
<div class="ml-6 pl-20 inline-flex items-baseline">
<GrFacebook className="social-icons"/>  
<GrLinkedin className="social-icons"/>
<BsTwitter className="social-icons"/>
<FaSquareInstagram className="social-icons"/>
<TfiEmail className="social-icons"/>
</div>
</div>
<div className="text-color">
<div className="footer-p">
    <p>affordable electrical engineering services at your Door</p>
    <p>Book for Electrical engineering services with Odims Engineering Professionals</p> 
    <p>Chat With Us at</p>
    <p>info@odimsengineering.co.za</p>
    </div>


    <form className="footer-form ">
    <div class="txt1">
    <TextField id="filled-basic" 
    className="filledBasic"
    label="Type Email Address" 
    variant="filled" />
    </div>
    <div className="txt2">
    <TextField
          id="outlined-textarea"
          label="Type Email Message ......."
          placeholder="Email Message"
          multiline
          className="email-body"
        /></div>
        <div class="txt2">
        {/* <input /> */}
        <Button variant="contained">send email<i class="fa-solid fa-paper-plane"></i></Button>
    </div>
    </form>
    </div>
  
<div className="footer-items">
<p className="text-sm md:text-lg">Copyright &copy; 2023, All Rights Reserved.</p>
<p className="shelter">Designed and Developed by Shelter Sibanda</p>
</div>
</div>
        </>
    )
}