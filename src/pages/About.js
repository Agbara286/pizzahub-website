import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css";
function About() {
  return (
    <div className="about">
        <div className="aboutTop"style={{ backgroundImage: `url(${MultiplePizzas})` }}> 

        </div>
       <div className="aboutBottom">
         <h1>ABOUT US</h1>
         <p>Every great pizza has a story, and ours began with a simple idea: good food should bring people together. What started as a small kitchen experiment quickly turned into a passion for creating fresh, handcrafted pizzas with flavors that make you feel right at home.

We believe pizza isn’t just a meal—it’s an experience. That’s why we use only the finest ingredients, prepare our dough fresh every day, and craft each pizza with care. Whether you’re grabbing a quick slice or sharing a box with friends, our goal is to make every bite unforgettable.

Welcome to our table. Let’s share a slice of happiness together.</p>
       </div>
       
      
    </div>
  )
}

export default About
