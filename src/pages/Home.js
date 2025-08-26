import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/home.css";
function Home() {
  return (
    <div>
      <div className="home"style={{ backgroundImage: `url(${BannerImage})` }}
>
        <div 
  className="headerContainer" >
  

        <h1>Agbara's pizza hub</h1>
        <p>SLICE OF HEAVEN IN EVERY BITE </p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      
       </div>
      </div>
      
    </div>
  )
}

export default Home;
