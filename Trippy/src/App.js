import React from 'react';
import "./App.css";
//import Navbar from "./components/Navbar";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
       
        <Routes>
            <Route eact path={"/"} element={<Home />}/>
            <Route exact path={"/about"} element={<About />}/>
            <Route exact path={"/service"} element={<Service />}/>
            <Route exact path={"/contact"} element={<Contact />}/>
            
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
