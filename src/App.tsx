import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/detail" element={<BlogDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
