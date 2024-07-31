import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";
import Home1 from "./routes/home/home1";
import RegistrationPage from "./routes/registration/registration";
import Sponsors from "./routes/sponsors/sponsors";
import AdminPage from './components/admin/adminpage';
import AdminLogin from './components/signup/signup';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin' || location.pathname === '/admin-login';
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="" element={<Home1 />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path='about' element={<About />}/>
          <Route path='sponsors' element={<Sponsors />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
