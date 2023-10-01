import react from "react"
import * as React from 'react';
import Button  from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import {RiAccountCircleFill} from 'react-icons/ri';
import Logo from '../assets/electrical-services-IMG/Best-logo.png'
import {GrFacebook} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {FaSquareInstagram} from 'react-icons/fa6';

import {TfiEmail} from 'react-icons/tfi';


function Home(){
    return(
        <>
        <div className="home">
        <div >
            <h1 className="home-hero">We are a company of professional Electrical Engineers and Technicians that's dedicated to provide you
with Electrical Solutions at your homes. <span className="hero-h1"> We are just One Call Away</span>
</h1>
<div className="hero-btn">
<Button variant="contained">Notable Projects <i class="fa-solid fa-angles-down"></i></Button>;
</div>
        </div>
        </div>
        <div className="testimonials">
        <h1>Here is what our clients say about us...</h1>
        
        <div class="testimonial-all-containers">
        <div class="testimonial-container">
        <span class="icon-text">
        <RiAccountCircleFill className="riaccount"/>
        <span class="profile-info">
        <h4>Chris Ugbaja</h4><br/>
        <p>Chris property owner</p>
        </span> 
        </span>   
<div className="testimonial-1">
<p>"To have dreamt about getting my electricity installed in my new Cottages,
having the cameras installed professionally
was something i never thought could be done in an instant
and professionally.
Well done guys you made my dream come true last 
  week and made me realise the sky is not our limit."</p>
</div>
</div>


<div class="testimonial-container">
        <span class="icon-text">
        <RiAccountCircleFill className="riaccount"/>
        <span class="profile-info">
        <h4>Chris Ugbaja</h4><br/>
        <p>Chris property owner</p>
        </span> 
        </span>   
<div className="testimonial-1">
<p>"To have dreamt about getting my electricity installed in my new Cottages,
having the cameras installed professionally
was something i never thought could be done in an instant
and professionally.
Well done guys you made my dream come true last 
  week and made me realise the sky is not our limit."</p>
</div>
</div>


<div class="testimonial-container">
        <span class="icon-text">
        <RiAccountCircleFill className="riaccount"/>
        <span class="profile-info">
        <h4>Chris Ugbaja</h4><br/>
        <p>Chris property owner</p>
        </span> 
        </span>   
<div className="testimonial-1">
<p>"To have dreamt about getting my electricity installed in my new Cottages,
having the cameras installed professionally
was something i never thought could be done in an instant
and professionally.
Well done guys you made my dream come true last 
  week and made me realise the sky is not our limit."</p>
</div>
</div>
</div>
        </div>
        <div class="advertisement-container">
        <div class="advertisement">
    <p>Simplify your life with Odims Engineering professionals,<br/>
We are more than you can imagine. </p><Button variant="contained">Book a Service <i class="fa-solid fa-paper-plane"></i></Button>
</div>

        </div>

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
    <TextField id="filled-basic" className="filledBasic"label="Email Address" variant="filled" />
    </div>
    <div class="txt2">
    <TextField
          id="outlined-textarea"
          label="Email Message"
          placeholder="Type email message"
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
</div>
</div>


</>
        
    )
}

export default Home