import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "../assets/contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, []);

  const [validate, setValidate] = useState(false);
  function handleValidate() {
    setValidate(true);
  }
  return (
    <div className="contact-page">
      <h1>Contact me</h1>
      <p className="hi-there">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="form">
        <div className="first-name">
          <label htmlFor='fname' >First Name</label>
          <input
            type="text"
            id="first_name"
            name="fname"
            placeholder="Enter your first name"
            className={`${validate ? "validate" : ""}`}
            required
          />
          <span className="warning-text">Please Enter your first name </span>
        </div>
        <div className="last-name">
          <label htmlFor='lname'  >Last Name</label>
          <input
            type="text"
            id="last_name"
            name="lname"
            placeholder="Enter your last name"
            className={`${validate ? "validate" : ""}`}
            required
          />
          <span className="warning-text">Please Enter your last name </span>
        </div>
        <div>
          <label htmlFor='eamil'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="yourname@email.com"
            required
            className={`${validate ? "validate" : ""}`}
          />
          <span className="warning-text">Please Enter your email </span>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="textarea"
            id="message"
            name="message"
            placeholder="Send me a message and I would reply as soon as possible..."
            required
            className={`${validate ? "validate" : ""}`}
          ></textarea>
          <span className="warning-text">Please Enter a message </span>
        </div>
        <div className="type-checkbox">
          <input type="checkbox" required name="checkbox"/>
          <label htmlFor="checkbox">
            You agree to providing your data to Timothy Achonu, who may contact
            you.
          </label>
        </div>
        <div>
          <input
            type="submit"
            id="btn__submit"
            value="Send message"
            onClick={handleValidate}
          />
        </div>
      </form>
      <hr />
      <Footer />
    </div>
  );
}
