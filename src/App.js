
import React from "react";
import { BrowserRouter as Router, Route,Routes,  Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import sklogo from "./images/sklogo.png";
import Product from "./pages/Product";
import Color from "./pages/Color";

function App() { 
  
  return(

      
    <Router>
      <div className="App">
        <div className="logo">
      <img src={sklogo} alt="logo"/>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to ="/product">Product</Link>
            </li>
            <li>
              <Link to="/color">Color Range</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/color" element={<Color/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;