import React from 'react'
import userImg from "../assets/tim.jpg";
import slackImg from "../assets/slack.png";
import githubImg from "../assets/github.png";
import shareLogo from "../assets/share.png";
import { Link } from "react-router-dom";
import Footer from './Footer';


export default function LinkTree() {
  return (
    <div className="link-tree">
    <div className="person-profile">
      <figure className="profile-img">
        <img id="profile__img" src={userImg} alt="user-profile-img" />
      </figure>
      <div id="twitter">TimothyAchonu</div>
      <div id="slack">TimAchonu</div>
      <div className="top-right three-dots">...</div>
      <div className="top-right share">
        {" "}
        <img src={shareLogo} alt="share icon"/>{" "}
      </div>
    </div>
    <div className="links-container">
      <a href="https://twitter.com/TimothyAchonu" id="twitter-link">
        Twitter
        <span className="display-none">TimothyAchonu</span>
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri-Team
        <span className="display-none">Zuri Training team</span>
      </a>
      <a href="http://books.zuri.team" id="books">
        Books
        <span className="display-none">
          This is where you would find books about design and coding.
        </span>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=TIMOTHY Achonu"
        id="book__python"
      >
        Python Books
        <span className="display-none">
          Buy easy to understand and detailed books on python.
        </span>
      </a>
      <a href="https://training.zuri.team/" id="pitch">
        Background Check for Coders
        <span className="display-none">
          We offer the best software for Background check. It's easy to use,
          fast and reliable.
        </span>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        Design Books
        <span className="display-none">Get the best design books</span>
      </a>
      <Link to='/contact' id='contact'>
         Contact
         <span className="display-none">Go to contact</span>
      </Link>
    </div>
    <div className="social-icons">
      <img src={slackImg} alt="slack logo" />
      <img src={githubImg} alt="github logo" />
    </div>
    <hr />
    <Footer />
  </div>
  )
}
