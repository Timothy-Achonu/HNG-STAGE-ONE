import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../assets/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Link to="/HNG-STAGE-ONE">HOME</Link>
      <h1>Contact me</h1>
      <p className="hi-there">Hi there, contact me to ask me about anything you have in mind</p>
      <form className="form">
        <div className="first-name">
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            required
          />
          <span className="display-none">Please Enter your first name </span>
        </div>
        <div className="last-name">
          <label>Last Name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            required
          />
          <span className="display-none">Please Enter your first name </span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
          <span className="display-none">Please Enter your first name </span>
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="textarea"
            id="message"
            placeholder="Send me a message and I would reply as soon as possible..."
            required
          ></textarea>
          <span className="display-none">Please Enter your first name </span>
        </div>
        <div className="type-radio">
          <input type="radio" required />
          <label>
            You agree to providing your data to Timothy, who may contact you.
          </label>
        </div>
        <div>
          <input type="submit" id="btn__submit" value="Send message" />
        </div>
      </form>
      <hr />
      <Footer />
    </div>
  );
}
