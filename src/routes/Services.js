import react from "react"
import Footer from "../components/Footer"
import './css/Services.css'
import Image from '../assets/electrical-services-IMG/electrician-pic.jpg'
import Slideshow from "../components/SlideShow"
import Image2 from '../assets/electrical-services-IMG/access-control.jpg'
import Image1 from '../assets/electrical-services-IMG/electricians-1.jpg'
import geyser2 from '../assets/electrical-services-IMG/geyser2.jpg'
import GateM from '../assets/electrical-services-IMG/choosing-gate-motor.jpg'
import { BsSendFill } from "react-icons/bs"




function Services(){

    const x = <img src={Image2} alt="ele" />

    return(
        <>
        <div className="services">
      
        <div className="services-page-info mt-0  ">


        <div className="first-part inline-flex bg-[url('../assets/electrical-services-IMG/electrician-pic.jpg' )]">
        <h1 className="content-start text-xl md:text-3xl md:first-letter:font-extrabold text-yellow-200 md:text-blue-100 text-center ml-4">Get Professional Electricians to help with your Electrical problems,
            installation of everything Electricity, Cameras, gate motors, etc.</h1>
      
     
        <div className="image">
<img src={Image} alt="engineers" className="w-4/5 h-80" />
        </div>
        </div>
        <p className="md:pt-10 text-sm md:text-lg">Contact Odims Engineering when facing Electrical Issues.</p>

<div className="inline-flex mt-10">
<div className="md:mr-20 mr-10">
        <button class="bg-blue-500  hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700
         hover:border-blue-500 rounded">
  View Services
</button>
</div>
<button class="bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Ask An Expert
</button>

</div>

<h1 className="md:text-4xl text-2xl text-orange-400 mt-20 font-extrabold">Electrical Solutions With Odims Engineering</h1>
<p className="text-orange-200 text-sm pt-5">Odims Engineering is a Company of professional Electricians with more than 10 years of Experience</p>


<div className=" flex justify-between ">

<div className="pt-4 sevisi">
<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
01
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Full House, Office And Company Wiring.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
02
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Electrical Fault Finding.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
03
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Gates and Garage Motors.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
04
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Electric Fencing.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
05
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and servicing of Intercom System.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
06
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Access Control.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
07
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">CCTV Installation and Servicing.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
08
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Alarm System Installation and Servicing.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
09
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Power Backups.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
10
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Swimming Pool Pumps.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
11
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Borehole Pumps.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
12
</button><p className="service1 text-sm md:text-lg font-bold md:font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Geyser</p></div>
</div>

<div className="inline-block service-imgs">
<div className="sliding-pics pt-8">
<img src={Image1} alt="electricity" />
</div>
<div className="sliding-pics pt-8">
<img src={geyser2} alt="electricity" />
</div>
<div className="sliding-pics pt-8">
<img src={GateM} alt="electricity" />
</div>
    </div>
</div>

<div className="bg-yellow-500 h-10 text-center pt-1 mt-16 text-xl font-extrabold text-slate-800">
Book A Service With Us</div>

<div className="pt-10 w-full bg-slate-400 pb-6 ">

<div className="md:grid md:grid-cols-2  gap-3 md:ml-10 ml-1 mr-1">
<div><div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        First Name/ Names
      </label>
      <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="first names...."/>
    </div>
   </div>
<div><div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="surname">
        Surname
      </label>
      <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="surname" type="text" placeholder="Surname....."/>
    </div>
   </div>
<div><div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
       Email Address
      </label>
      <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address....."/>
    </div>
   </div>
<div><div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="number">
       Phone Number
      </label>
      <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="(081) 000........."/>
    </div>
   </div>

<div>  <div class="w-full md:w-4/5 px-0 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Province
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Gauteng</option>
          <option>North-West</option>
          <option>Free State</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div></div>
<div>  <div class="w-full md:w-4/5 px-0 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        City
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Johannesburg</option>
          <option>Pretoria</option>
          <option>Alberton</option>
          <option>Edenvale</option>
          <option>Mogale</option>
          <option>Saulsville</option>
          <option>Centurion</option>
          <option>Ekurhuleni</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div></div>
<div>
<div class="w-full md:w-4/5 px-0 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
       Select Service
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>Electrical Fault Finding.</option>
          <option>Full House, Office or Company Wiring.</option>
          <option>Installation and Servicing of Garage Motor.</option>
          <option> Electric Fencing and servicing.</option>
          <option>Installation and Servicing Intercom System.</option>
          <option>Access Control.</option>
          <option>CCTV Installation and Servicing.</option>
          <option>Installation and Servicing Alarm System.</option>
          <option>Installation and Servicing Power Backups.</option>
          <option>Installation and Servicing of Swimming Pool Pumps.</option>
          <option>Installation and Servicing of Borehole Pumps.</option>
          <option>Installation and Servicing of Geyser.</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
</div>

<div className="col-span-2">
    <p className="text-green-700">If you were not able to find the service you need please type the service below</p>
    <textarea
rows={6} className=" text-sm md:text-lg text-black
placeholder:text-slate-400 block bg-white w-11/12
border border-slate-300 rounded-md shadow-sm focus:outline-none
focus:ring-sky-500 focus:ring-1" placeholder="Enter the services .............. "
name="ask-txt"
/>
</div>

<div className="col-span-2 justify-end text-right mr-10 md:mr-20 mt-2  "> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
<p className="text-sm md:text-lg flex">Submit <BsSendFill className="mt-2 ml-2"/> </p>
</button>
</div>   

</div>



</div>



</div>


</div>


         
        <Footer/>
        </>
    )
}

export default Services