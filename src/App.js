import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Home";
import Red from "./components/Colors/red";
import Green from "./components/Colors/green";
import Blue from "./components/Colors/blue";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/red" element={<Red/>}/>
        <Route path="/green" element={<Green/>}/>
        <Route path="/blue" element={<Blue/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App