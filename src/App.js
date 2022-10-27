import "./App.css";
import imgSrc from "./assets/tim.jpg";

function App() {
  
  return (
    <div className="App">
      <div className="person-profile">
        <figure>
          <img id="profile__img" src={imgSrc} alt="user-profile-img"/>
        </figure>
        <div id="twitter">Timothy Achonu</div>
        <div id="slack">TIMOTHY Achonu</div>
        <div className="three-dots">...</div>
      </div>
      <div className="links-container">
      <a href="https://twitter.com/TimothyAchonu" id="twitter-link">
          Twitter
          <span className="display-none">TimothyAchonu</span>
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Zuri-Team
          <span className="display-none">TimothyAchonu</span>
        </a>
        <a href="http://books.zuri.team" id="books">
          Books
          <span className="display-none">TimothyAchonu</span>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=TIMOTHY Achonu" id="book__python">
          Python Books
          <span className="display-none">TimothyAchonu</span>
        </a>
        <a href="https://training.zuri.team/" id="pitch">
          Background Check for Coders
          <span className="display-none">TimothyAchonu</span>
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
           Design Books
           <span className="display-none">TimothyAchonu</span>
        </a>
      </div>
    </div>
  );
}

export default App;
