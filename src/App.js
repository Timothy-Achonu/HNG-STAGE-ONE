import "./App.css";
import LinkTree from "./components/LinkTree";
import zuriLogo from "./assets/Zuri_Logo.png";
import internLogo from "./assets/I4G.png";
import { Routes, Route} from 'react-router-dom';
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LinkTree />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr />
      <footer>
        <img src={zuriLogo} alt="Zuri logo" />
        <div>HNG Internship 9 Frontend Task</div>
        <img src={internLogo} alt="intern-logo" />
      </footer>
    </div>
  );
}
/*
feat: The new feature you're adding to a particular application
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the code-base
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.
in this manner git commit -m "feat: The new feature you're adding to a particular application"

*/

export default App;
