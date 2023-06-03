import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageDark from "./pages/HomepageDark";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageDark />} />
        <Route path="/light" element={<Homepage />} />
        <Route path="/blogs/*" children={Bloglist} />
        <Route path="/blogs/blog-details/:id/:title" children={BlogDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
