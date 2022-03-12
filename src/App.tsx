import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <>
            {/* <div className="font-body text-center mx-auto bg-dark-bg text-white">
                <LandingPage />
            </div> */}
            <div className="font-body text-center mx-auto bg-light text-white">
                <BlogPage />
            </div>
        </>
    );
}

export default App;
