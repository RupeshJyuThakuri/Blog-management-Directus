import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import BlogBySlug from "./components/BlogBySlug";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogBySlug />} />
      </Routes>
    </Router>
  );
}

export default App;
