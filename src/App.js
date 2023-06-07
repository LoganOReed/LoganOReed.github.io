import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageDark from "./pages/HomepageDark";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageDark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
