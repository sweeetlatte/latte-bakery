import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

import banner from "./assets/banner-1.png";

// config tailwindcss
import "./main.css";

function App() {
    return (
        <div className="font-body text-center mx-auto bg-dark-bg text-white">
            <div className="w-screen h-screen bg-no-repeat bg-cover">
                <Navbar />
                {/* <Carousel /> */}
            </div>
        </div>
    );
}

export default App;
