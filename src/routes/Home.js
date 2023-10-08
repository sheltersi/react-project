import react from "react"
import * as React from 'react';
import Button  from '@mui/material/Button'; 
import {RiAccountCircleFill} from 'react-icons/ri';
import Footer from '../components/Footer'
import './css/Home.css'


function Home(){
    return(
        <>
        <div className="home md:text-2xl text-sm">
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
        
        <div class="testimonial-all-containers sm:ml-30  mx-auto ">
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

<Footer/>


</>
        
    )
}

export default Home