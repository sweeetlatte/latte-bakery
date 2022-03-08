import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <div className="font-body text-center mx-auto bg-dark-bg text-white">
            <LandingPage />
        </div>
    );
}

export default App;
