import React from "react";

import Icons from "../Icons";

export default function Pagination() {
    return (
        <div className="flex space-x-3 items-center">
            <Icons.ChevronsLeft stroke="white" />
            <div className="bg-primary w-[30px] h-[30px] rounded-full flex items-center justify-center">
                1
            </div>
            <div className="bg-dark hover:bg-primary w-[30px] h-[30px] rounded-full flex items-center justify-center">
                2
            </div>
            <div className="bg-dark hover:bg-primary w-[30px] h-[30px] rounded-full flex items-center justify-center">
                3
            </div>
            <Icons.ChevronsRight stroke="white" />
        </div>
    );
}
