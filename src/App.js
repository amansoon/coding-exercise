import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stories' element={<Stories />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
