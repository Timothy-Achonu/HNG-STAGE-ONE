import "./App.css";
import LinkTree from "./components/LinkTree";
import { Routes, Route} from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/HNG-STAGE-ONE" element={<LinkTree />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
     
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
