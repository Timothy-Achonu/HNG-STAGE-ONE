import React from "react";
import Footer from "./Footer";
import { Link} from "react-router-dom";
import '../assets/contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
        <Link to="/HNG-STAGE-ONE">HOME</Link>
      <h1>Contact me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind</p>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label>Email Name</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div>
          <label>Message</label>
          <input
            type="textarea"
            id="message"
            placeholder="Send me a message and I would reply as soon as possible..."
          />
        </div>
        <div>
          <input type="radio" />
          <label>
            You agree to providing your data to Timothy, who may contact you.
          </label>
        </div>
        <div>
          <input type="submit" id="btn__submit" />
        </div>
      </form>
      <hr />
      <Footer />
    </div>
  );
}
