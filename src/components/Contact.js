import React from "react";
import Footer from "./Footer";
import "../assets/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact me</h1>
      <p className="hi-there">Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="form">
        <div className="first-name">
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            required
          />
          <span className="warning-text">
            Please Enter your first name </span>
        </div>
        <div className="last-name">
          <label>Last Name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            required
          />
          <span className="warning-text">
            Please Enter your last name </span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
          <span className="warning-text">Please Enter your 
          email </span>
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="textarea"
            id="message"
            placeholder="Send me a message and I would reply as soon as possible..."
            required
          ></textarea>
          <span className="warning-text">Please Enter a
          message </span>
        </div>
        <div className="type-radio">
          <input type="checkbox" required />
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
