import react from "react"
import logo from '../assets/images/electrician-about-page.jpg'
import Footer from "../components/Footer"
import './css/about.css'
import {RiAccountCircleFill} from 'react-icons/ri';


function About(){
    return(
        <div >
<div class="about-us">

<div class="hero">
<p class="ml-2 md:ml-40 pt-10 pt-8 md:pt-20 text-lg md:text-4xl font-bold md:font-extrabold">
<div class="pb-2"><span class="text-orange-500">WE </span> 
 <span class="bg-orange-500 text-white py-1 px-2 mr-4"> DON'T </span>   JUST SELL OUR SERVICES </div>
  WE SELL SATSFICATION BECAUSE OUR<br/>
   TEAM WILL DO AN EXCELLENT SERVICE <br/> 
   FOR YOU</p>


   <div className="ml-2 mt-8 md:ml-40">
    <i class="fa-solid fa-check text-orange-500 ml-4 md:ml-40 mt-4 font-extrabold text-1xl"></i>
    <span className="ml-3">We're Here When You Need Us.</span>
    </div>
    
   <div className=" ml-2 md:ml-40">
    <i class="fa-solid fa-check text-orange-500 ml-2 md:ml-40 mt-4 font-extrabold text-2xl"></i>
    <span className="ml-3">Garanteed Services No Matter where you are located.</span>
    </div>
    
   <div className=" ml-2 md:ml-40">
    <i class="fa-solid fa-check text-orange-500 ml-2 md:ml-40 mt-4 font-extrabold text-2xl"></i>
    <span className="ml-3">Tell us your needs and we are here to serve you.</span>
    </div>
    
   <div className=" ml-2 md:ml-40">
    <i class="fa-solid fa-check text-orange-500 ml-2 md:ml-40 mt-4 font-extrabold text-2xl"></i>
    <span className="ml-3">From electrical fault solutions, Welding services, plumbing services, 
   CCTV installations, Garage & Gate motor installations And Many More....</span>
    </div>

<div className=" ml-2 md:ml-40 mt-6">
  <button className="bg-blue-600 rounded-3xl py-2 px-6">Book A Service<i class="fa-solid fa-paper-plane"></i></button>
</div>

</div>

</div>


<div className="w-full md:w-3/5 text-center ml-2 md:ml-60 py-14 px-14">
  <p className="text-2xl font-extrabold text-orange-600">
    Odims Engineering is a company with professional Engineers with more than 10 years of experience in Electrical Engineering field
  / Welding / Plumbing / Installations / Maintenance and more...
  </p>
  <p className="text-blue-900 text-xl font-bold">
    With our Uncanny team of engineers, we are confident that we always do good work to make our clients happy.
  </p>
</div>

<div class="our-team">
  <div className="team">
    <div class="team-body text-center  md:mx-40 pt-6">
    <h1 className="text-3xl font-extralight text-orange-500 mb-4">Our <span className="bg-orange-500 py-2 px-2 text-white">Team</span></h1>
<p className="w-4/5 text-xl font-bold">Our Team is what makes our company. We have a team of talented proffessionals, Welding specialists, 
  Plumbing specialistsand more.... who can solve your problems.
</p>


  </div>

 

 <div className="text-center md:ml-40 mt-10 inline-flex space-x-10">

  <div className=" w-72 h-40">
  <div className="mt-4 text-center">
<RiAccountCircleFill className="riaccount text-white w-28 h-28"/>
</div>
<div className="text-center">
<h1 className="font-bold">Francis Odikaesieme</h1>
<p>Founder & Senior Engineer</p>

</div>

  </div>

  {/* <div className=" w-72 h-40">
  <div className="mt-4 text-center">
<RiAccountCircleFill className="riaccount text-white"/>
</div>
<div className="text-center">
<h1 className="font-bold">Francis Odikaesieme</h1>
<p>Founder & Senior Engineer</p>

</div>

  </div> */}



 </div>

  

</div>
</div> 





        <Footer/>

        </div>
        
    )
}

export default About