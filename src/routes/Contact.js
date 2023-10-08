import react from "react"
import * as React from 'react';
import Footer from "../components/Footer";
import './css/contact.css'
import Picture from '../assets/electrical-services-IMG/ele-installation.jpg'
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Contact(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const[city, setCity] = React.useState('');
    const handleCity = (event) => {
        setCity(event.target.value);
    }


    return(
        <>
         <h1 className="h1-contact text-2xl md:text-4xl pb-6 pt-6 font-extrabold font-Young-serif text-slate-200">
         Get in Touch with us</h1>
         <p></p>


        <div className="contact md:flex block">
        
       
        <div className="picture-container items-center sm:ml-7 md:ml-10 border-y-slate-600">
        {/* <img src={Picture} alt="electricity-installation" className="picture"/> */}
        <h3 className="text-xl font-bold text-yellow-600 md:text-white md:3xl md:font-extrabold">Talk to our support Team find out how we can help you</h3>
        <hr className="hr pb-4 " />
        <p className="text-sm md:text-lg">Fill out your information and an Odims Engineering representative will 
        reach out to you. Have a simple question? Check out our FAQ.</p>
        </div>



        <div className="form px-2 py-2 w-auto md:h-auto mb-20">
        <div class=" space-x-1 gap-4 md:grid md:grid-cols-2 md:gap-8 items-center">
        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
       leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Surname">
      Surname
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
       leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" placeholder="surname"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
  Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="phone-number">
      SA Phone Number
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline" id="phone-number" type="text" placeholder="phone-number"/>
    </div>

{/* 
<div>
  <FormControl sx={{ m: 1, minWidth: 80 }}>
    <InputLabel id="demo-simple-select-autowidth-label">Province</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={age}
      onChange={handleChange}
      autoWidth
      label="Province"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Twenty</MenuItem>
      <MenuItem value={21}>Twenty one</MenuItem>
      <MenuItem value={22}>Twenty one and a half</MenuItem>
    </Select>
  </FormControl>
</div>  */}



{/* <div>
  <FormControl sx={{ m: 1, minWidth: 80 }}>
    <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={city}
      onChange={handleCity}
      autoWidth
      label="City"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Twenty</MenuItem>
      <MenuItem value={21}>Twenty one</MenuItem>
      <MenuItem value={22}>Twenty one and a half</MenuItem>
    </Select>
  </FormControl>
</div>  */}

<div >
<div class="w-full md:w-1/9 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Province
      </label>

<div class="relative text-lg">
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
<div class="w-full md:w-1/9 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        City
      </label>
      <div class="relative text-lg">
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

<div className="col-span-2 "> 
<p className="text-lg">What Would you like to discuss?</p>
<textarea
rows={6} className=" text-sm md:text-lg
placeholder:text-slate-400 block bg-white w-11/12
border border-slate-300 rounded-md shadow-sm focus:outline-none
focus:ring-sky-500 focus:ring-1" placeholder="Ask Anything .............. "
name="ask-txt"
/>
</div>




<div className="col-span-2 "> <input type="checkbox" name="mycheckbox"
    className="block bg-white border border-slate-300"
/>
<p className="text-sm md:text-lg">By checking the box and clicking "Submit", you are agreeing to Odims Engineering Privacy Statement</p>
</div>

<div className="col-span-2 "> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
<p className="text-sm md:text-lg">Submit</p>
</button>
</div>    

    
    </div>

    
        </div>
        </div>
     
        <div>
        <Footer/>
        </div>
        </>
    )
}

export default Contact