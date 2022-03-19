import React from "react";

import search from "../assets/icons/search.svg";

export default function SearchBar() {
    return (
        <div className="flex bg-dark-bg border border-border rounded py-3.5 px-3.5 w-96">
            <img src={search} alt="icon search" />
            <input
                className="bg-dark-bg pl-2 w-full focus:outline-none"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Type something..."
            />
        </div>
    );
}
