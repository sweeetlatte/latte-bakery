import React from "react";

interface Props {
    stroke: string;
}

const BiggerChevronDown = ({ stroke }: Props) => (
    <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="0.353553"
            y1="0.646447"
            x2="9.64494"
            y2="9.93783"
            stroke={stroke}
        />
        <line
            x1="19.3536"
            y1="0.353553"
            x2="9.35355"
            y2="10.3536"
            stroke={stroke}
        />
    </svg>
);

const ChevronDown = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-chevron-down"
    >
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const ChevronRight = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-chevron-right"
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Icons = {
    BiggerChevronDown,
    ChevronDown,
    ChevronRight,
};

export default Icons;
