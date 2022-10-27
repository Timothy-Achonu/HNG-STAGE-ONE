import "./App.css";
import userImg from "./assets/tim.jpg";
import slackImg from "./assets/slack.png";
import githubImg from "./assets/github.png";
// import zuriIntern from "./assets/Zuri_Logo.png";

function App() {
  
  return (
    <div className="App">
      <div className="person-profile">
        <figure>
          <img id="profile__img" src={userImg} alt="user-profile-img"/>
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
          <span className="display-none">Zuri Training team</span>
        </a>
        <a href="http://books.zuri.team" id="books">
          Books
          <span className="display-none">
            This is where you would find books about design and coding.
          </span>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=TIMOTHY Achonu" id="book__python">
          Python Books
          <span className="display-none">Buy easy to understand and 
          detailed books on python.
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
      </div>
      <div className="social-icons">
        <img src={slackImg} alt="slack image" />
        <img src={githubImg} alt="github image" />
      </div>
    </div>
  );
}

export default App;
