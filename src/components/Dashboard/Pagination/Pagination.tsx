import React from "react";

import "./pagination.css";

import Icons from "../../Icons";

export default function Pagination() {
    return (
        <div className="flex space-x-3 items-center">
            <Icons.ChevronsLeft stroke="white" />
            <div className="bg-primary __page-item">1</div>
            <div className="bg-dark hover:bg-primary __page-item">2</div>
            <div className="bg-dark hover:bg-primary __page-item">3</div>
            <Icons.ChevronsRight stroke="white" />
        </div>
    );
}
