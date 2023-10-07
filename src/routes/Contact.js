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
         <h1 className="h1-contact text-4xl pb-6 pt-6 font-extrabold font-Young-serif text-slate-200">
         Get in Touch with us</h1>
        <div className="contact">
        
       
        <div className="picture-container">
        <img src={Picture} alt="electricity-installation" className="picture"/>
        <h3>Talk to our support Team find out how we can help you</h3>
        <hr className="hr" />
        <p>Fill out your information and an Odims Engineering representative will 
        reach out to you. Have a simple question? Check out our FAQ.</p>
        </div>


        <div className="form mx-1">
        <div class="grid grid-cols-2 gap-8">
  
        <div >
<TextField id="outlined-basic" label="Name" variant="outlined" className="textfield" />
</div>
<div>
<TextField id="outlined-basic" label="Surname" variant="outlined" className="textfield"/>
</div>

<div>
     <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" className="textfield"/>
     </div>
     <div>
 <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="cell number" max="10" className="textfield"/>
</div>


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
</div> 



<div>
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
</div> 



<div className="col-span-2 "> 
<p>What Would you like to discuss?</p>
<textarea
rows={6} className="
placeholder:text-slate-400 block bg-white w-full
border border-slate-300 rounded-md shadow-sm focus:outline-none
focus:ring-sky-500 focus:ring-1" placeholder="  Ask Anything .............. "
name="ask-txt"
/>
</div>




<div className="col-span-2 "> <input type="checkbox" name="mycheckbox"
    className="block bg-white border border-slate-300"
/>By checking the box and clicking "Submit", you are agreeing to Odims Engineering Privacy Statement
</div>

<div className="col-span-2 "> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
Submit
</button>
</div>    

    
    </div>

    <div class="grid grid-cols-2 gap-12">

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