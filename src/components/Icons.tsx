import React from "react";

interface Props {
    stroke?: string;
    fill?: string;
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

const ThumbsUp = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-thumbs-up"
    >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
);

const ThumbsDown = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-thumbs-down"
    >
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
    </svg>
);

const ChevronsLeft = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-chevrons-left"
    >
        <polyline points="11 17 6 12 11 7"></polyline>
        <polyline points="18 17 13 12 18 7"></polyline>
    </svg>
);

const ChevronsRight = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-chevrons-right"
    >
        <polyline points="13 17 18 12 13 7"></polyline>
        <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
);

const Minus = ({ stroke }: Props) => (
    <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5C19.2447 15.3303 15.3303 19.2447 10.5 19.25ZM3.5 10.6505C3.5414 14.5016 6.68597 17.5959 10.5372 17.5752C14.3885 17.5544 17.4996 14.4266 17.4996 10.5752C17.4996 6.72394 14.3885 3.59605 10.5372 3.57525C6.68597 3.55465 3.5414 6.64892 3.5 10.5V10.6505ZM14.875 11.375H6.125V9.625H14.875V11.375Z"
            fill={stroke}
        />
    </svg>
);

const Plus = ({ stroke }: Props) => (
    <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5C19.2447 15.3303 15.3303 19.2447 10.5 19.25ZM3.5 10.6505C3.5414 14.5016 6.68597 17.5959 10.5372 17.5752C14.3885 17.5544 17.4996 14.4266 17.4996 10.5752C17.4996 6.72394 14.3885 3.59605 10.5372 3.57525C6.68597 3.55465 3.5414 6.64892 3.5 10.5V10.6505ZM11.375 14.875H9.625V11.375H6.125V9.625H9.625V6.125H11.375V9.625H14.875V11.375H11.375V14.875Z"
            fill={stroke}
        />
    </svg>
);

const Icons = {
    BiggerChevronDown,
    ChevronDown,
    ChevronRight,
    ThumbsUp,
    ThumbsDown,
    ChevronsLeft,
    ChevronsRight,
    Minus,
    Plus,
};

export default Icons;
