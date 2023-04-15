import './App.css';
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom"

import NavBar from "./components/NavBar.js";
import SignupForm from "./components/signup.js"
import AboutUs from "./components/aboutus.js"
import ContactUs from "./components/contactus.js"

function App() {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pravara, setPravara] = useState("");
  const [email, setEmail] = useState("");
  const [pathasalaname, setPathasalaname] = useState("");
  const [location, setLocation] = useState("");
  const [scope, setScope] = useState("");
  const [setCerti] = useState("");
  const [gotra, setGotra] = useState("");


  return (
    <div className="MainPage">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={
      <SignupForm firstname={firstname} setFirstname={setFirstname} 
      lastname={lastname} setLastname={setLastname} 
      pravara={pravara} setPravara={setPravara} 
      email={email} setEmail={setEmail} 
      pathasalaname={pathasalaname} setPathasalaname={setPathasalaname} 
      location={location} setLocation={setLocation} 
      scope={scope} setScope={setScope} 
      setCerti={setCerti} 
      gotra={gotra} setGotra={setGotra} />}></Route>

            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
          </Routes>
        </div>

    </div>


  );
}

export default App;
