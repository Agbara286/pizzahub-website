import React, {useState} from 'react'
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom"
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [openLinks,setOpenLinks]=useState(false);


  const toggleNavbar=()=>{
    setOpenLinks(!openLinks)
  }
  return (
    <div>
      <div className="navbar">
   <div className="leftSide" id={openLinks ? "open" :"close"}>
            <img src={Logo} alt='Pizza Logo'/>
            <div className="hiddenLinks">
             <Link to ="/">Home</Link>
            <Link to ="/menu">menu</Link>
               <Link to ="/About">About</Link>
                 <Link to ="/Contact">Contact</Link>
            </div>
        </div>
       
          <div className="rightSide">
            <Link to ="/">Home</Link>
            <Link to ="/menu">menu</Link>
               <Link to ="/About">About</Link>
                 <Link to ="/Contact">Contact</Link>
           <button onClick={toggleNavbar}>
            <ReorderIcon />
           </button>
          </div>
         
    </div>
  </div>
    )
}
    
     

export default NavBar;
