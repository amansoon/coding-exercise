import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
