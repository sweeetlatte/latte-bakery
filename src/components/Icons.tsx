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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right"
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const ThumbsUp = ({ stroke, fill }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-thumbs-up cursor-pointer"
    >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
);

const ThumbsDown = ({ stroke, fill }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-thumbs-down cursor-pointer"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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

const Cash = ({ stroke }: Props) => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16.688 2.5C19.8978 2.5 22.5 5.16116 22.5 8.44374V15.5563C22.5 18.8388 19.8978 21.5 16.688 21.5H8.31204C5.10219 21.5 2.5 18.8388 2.5 15.5563V8.44374C2.5 5.16116 5.10219 2.5 8.31204 2.5H16.688ZM16.688 3.98651H8.31204C5.90498 3.98651 3.95358 5.98213 3.95358 8.44374V15.5563C3.95358 18.0179 5.90498 20.0135 8.31204 20.0135H16.688C19.095 20.0135 21.0464 18.0179 21.0464 15.5563L21.046 15.279L17.8499 15.2798C16.0084 15.2787 14.5159 13.7531 14.5147 11.8695C14.5147 10.0491 15.9101 8.56244 17.6673 8.46431L17.8504 8.45916L21.046 8.459L21.0464 8.44374C21.0464 6.05454 19.2081 4.10431 16.8991 3.99165L16.688 3.98651ZM21.046 9.945L17.8508 9.94567C16.8109 9.94632 15.9683 10.8074 15.9683 11.869C15.9689 12.8811 16.7329 13.7102 17.7033 13.7874L17.8504 13.7933L21.046 13.793V9.945ZM18.2942 11.0652C18.6956 11.0652 19.021 11.3979 19.021 11.8084C19.021 12.1847 18.7475 12.4957 18.3928 12.5449L18.2942 12.5517H17.9921C17.5907 12.5517 17.2653 12.2189 17.2653 11.8084C17.2653 11.4322 17.5388 11.1212 17.8935 11.072L17.9921 11.0652H18.2942ZM12.8539 6.99736C13.2553 6.99736 13.5807 7.33013 13.5807 7.74062C13.5807 8.1169 13.3073 8.42788 12.9525 8.47709L12.8539 8.48388H7.62203C7.22063 8.48388 6.89524 8.15111 6.89524 7.74062C6.89524 7.36434 7.16866 7.05337 7.5234 7.00415L7.62203 6.99736H12.8539Z"
            fill={stroke}
        />
    </svg>
);

const Card = ({ stroke }: Props) => (
    <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 4.75C0 2.12665 2.12665 0 4.75 0H16.75C19.3734 0 21.5 2.12665 21.5 4.75V10.75C21.5 13.3734 19.3734 15.5 16.75 15.5H4.75C2.12665 15.5 0 13.3734 0 10.75V4.75ZM1.58697 4H19.913C19.5745 2.56665 18.2868 1.5 16.75 1.5H4.75C3.21321 1.5 1.92555 2.56665 1.58697 4ZM20 5.5H1.5V10.75C1.5 12.5449 2.95507 14 4.75 14H16.75C18.5449 14 20 12.5449 20 10.75V5.5ZM12 10.75C12 10.3358 12.3358 10 12.75 10H16.75C17.1642 10 17.5 10.3358 17.5 10.75C17.5 11.1642 17.1642 11.5 16.75 11.5H12.75C12.3358 11.5 12 11.1642 12 10.75Z"
            fill={stroke}
        />
    </svg>
);

const ArrowUp = ({ stroke }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
    >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);

const ArrowLeft = ({ stroke }: Props) => (
    <svg
        width="21"
        height="13"
        viewBox="0 0 21 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.5625 11.5625L1.5 6.5M1.5 6.5L6.5625 1.4375M1.5 6.5L19.5 6.5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Tick = ({ stroke }: Props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9377 7.80523L9.7504 13.3052C9.57807 13.5317 9.31132 13.6655 9.02715 13.6673H9.02073C8.73932 13.6673 8.47348 13.5372 8.29932 13.3153L6.06998 10.4672C5.75832 10.0694 5.82798 9.49282 6.22673 9.18115C6.62457 8.86857 7.20207 8.93823 7.51373 9.3379L9.01065 11.2501L12.4793 6.69515C12.7855 6.29273 13.3602 6.2139 13.7645 6.52098C14.1669 6.82807 14.2448 7.40282 13.9377 7.80523ZM10.0007 0.833984C4.9379 0.833984 0.833984 4.9379 0.833984 10.0007C0.833984 15.0625 4.9379 19.1673 10.0007 19.1673C15.0634 19.1673 19.1673 15.0625 19.1673 10.0007C19.1673 4.9379 15.0634 0.833984 10.0007 0.833984Z"
            fill="#F3A446"
        />
    </svg>
);

const Trash = ({ stroke = "white" }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-trash-2"
    >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
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
    Cash,
    Card,
    ArrowUp,
    ArrowLeft,
    Tick,
    Trash,
};

export default Icons;
