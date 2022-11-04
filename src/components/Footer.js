import React from 'react'
import zuriLogo from "../assets/Zuri_Logo.png";
import internLogo from "../assets/I4G.png";

export default function Footer() {
  return (
    <div>
       <footer>
        <img src={zuriLogo} alt="Zuri logo" />
        <div>HNG Internship 9 Frontend Task</div>
        <img src={internLogo} alt="intern-logo" />
      </footer>
    </div>
  )
}
