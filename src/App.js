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
import bulma from "bulma/css/bulma.css"

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <a className="navbar-item"> <Link to="/" className="button is-danger">Home</Link></a>
          <a className="navbar-item"> <Link to="usuarios" className="button is-light">Users</Link></a>
          <a className="navbar-item"> <Link to="/contacto" className="button is-info">Contact</Link></a>

        </div>

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
