import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./routes/home/home";
import RegistrationPage from "./routes/registration/registration";
import About from "./components/about/about";
import Sponsors from "./components/sponsors/sponsors";
import Contact from "./components/contact/contact";
import AdminLogin from "./components/signup/signup";
import AdminPage from "./components/admin/adminpage";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/admin-login" element={<AdminLogin/>} />
        <Route path="home" element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path='sponsors' element={<Sponsors />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
