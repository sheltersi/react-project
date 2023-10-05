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
            <div class="footer">
<div class="footer-contents">
<div class="footer-logo">
<img src={Logo} className="footer-nav-logo"/><span class="footer-logo-text">Odims Engineering</span>
</div>
<div class="footer-socials">
<GrFacebook className="social-icons"/>  
<GrLinkedin className="social-icons"/>
<BsTwitter className="social-icons"/>
<FaSquareInstagram className="social-icons"/>

<TfiEmail className="social-icons"/>
</div>
</div>
<div class="text-color">
<div class="footer-p">
    <p>affordable electrical engineering services at your Door</p>
    <p>Book for Electrical engineering services with Odims Engineering Professionals</p> 
    <p>Chat With Us at</p>
    <p>info@odimsengineering.co.za</p>
    </div>
    <form className="footer-form">
    <div class="txt1">
    <TextField id="filled-basic" 
    className="filledBasic"
    label="Type Email Address" 
    variant="filled" />
    </div>
    <div class="txt2">
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
  
<div class="footer-items">
<p>Copyright &copy; 2023, All Rights Reserved.</p>
<p class="shelter">Designed and Developed by Shelter Sibanda</p>
</div>
</div>
        </>
    )
}