import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Users from './components/Users';
import Contact from './components/Contact';
import Home from "./components/Home";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Users</Link>
        </li>
        <li>
          <Link to="/contacto">Contact</Link>
        </li>
      </ul>

      <hr></hr>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={< Users /> } />
          <Route path="/contacto" element={<Contact />} />
          <Route element={ Notfound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
