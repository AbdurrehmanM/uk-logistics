import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
