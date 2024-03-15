import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Menu from "./Pages/Menu/Menu";
import NotFound from "./components/Layouts/NotFound";
import Gallery from "./Pages/Gallery/Gallery";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>

        {/* Other routes for your application */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
