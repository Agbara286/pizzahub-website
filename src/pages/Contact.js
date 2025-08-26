import React, { useRef } from "react";
import emailjs from "emailjs-com";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        "service_vogcoxu",
        "template_ikcooyi",
        form.current,
        "dl1-1w0Zlpa9WlX08" 
      )  
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error: " + error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>

      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>

          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
