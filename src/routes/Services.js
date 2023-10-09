import react from "react"
import Footer from "../components/Footer"
import './css/Services.css'
import Image from '../assets/electrical-services-IMG/electrician-pic.jpg'
import Slideshow from "../components/SlideShow"
import Image2 from '../assets/electrical-services-IMG/access-control.jpg'
import Image1 from '../assets/electrical-services-IMG/electricians-1.jpg'
import geyser2 from '../assets/electrical-services-IMG/geyser2.jpg'
import GateM from '../assets/electrical-services-IMG/choosing-gate-motor.jpg'




function Services(){

    const x = <img src={Image2} alt="ele" />

    return(
        <>
        <div className="services">
      
        <div className="services-page-info  ">


        <div className="inline-flex">
        <h1 className="content-start text-3xl font-extrabold text-blue-200">Get a Professional Electrical Engineer to help with your Electrical problems,
            installations of everything Electricity, Cameras, gate motors, etc.</h1>
      
     
        <div className="image">
<img src={Image} alt="engineers" className="" />
        </div>
        </div>
        <p>Contact Odims Engineering when facing Electrical Issues.</p>

<div className="inline-flex mt-10">
<div className="mr-20">
        <button class="bg-blue-500  hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700
         hover:border-blue-500 rounded">
  View Services
</button>
</div>
<button class="bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Ask An Expert
</button>

</div>

<h1 className="text-4xl text-orange-400 mt-20 font-extrabold">Electrical Solutions With Odims Engineering</h1>
<p className="text-orange-200 text-sm pt-5">Odims Engineering a Company of professional Engineers with more than 10 years Experience</p>


<div className=" flex justify-between ">

<div className="pt-4 sevisi">
<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
01
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Full House, Office And Company Wiring.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
02
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Electrical Fault Finding.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
03
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Garage Motor.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
04
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Electric Fencing.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
05
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and servicing of Intercom System.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
06
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Access Control.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
07
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">CCTV Installation and Servicing.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
08
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Alarm System.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
09
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Power Backups.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
10
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Swimming Pool Pumps.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
11
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Borehole Pumps.</p></div>

<div className="pt-6 inline-flex"><button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
12
</button><p className="service1 text-lg font-extrabold pt-1 pl-3  hover:text-blue-200 ">Installation and Servicing of Geyser</p></div>
</div>

<div className="inline-block">
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

<div className="pt-10 w-full bg-slate-500 ">

<div className="grid grid-cols-2 gap-5 ml-2">
{/* First role */}

<div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>

    <div class="mb-4 justify-end" >
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>



    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>

</div>

<div>
    <div class="w-full md:w-3/5 px-2 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
</div> 

<div>
    <div class="w-full md:w-4/5 px-2 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
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