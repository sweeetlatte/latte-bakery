import React from "react";
import Select from "react-select";

interface Props {
    data: any;
    placeholder: string;
    width: string;
}

export default function CustomSelectBox({ data, placeholder, width }: Props) {
    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "#323232",
            width: width,
            height: "54px",
            color: "white",
        }),
        option: (styles: any, { isFocused }: any) => ({
            ...styles, //có dòng này thì option mới nhận css custom này nhưng khi option active thì bị dính nền xanh
            color: "white",
            backgroundColor: isFocused ? "#F3A446" : "#323232",
            padding: "8px 12px",
        }),
        menuList: (styles: any) => ({
            ...styles,
            padding: 0,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: "white",
        }),
    };

    const MyComponent = () => (
        <Select
            styles={colourStyles}
            placeholder={placeholder}
            options={data}
            // menuIsOpen={true}
        />
    );

    return <MyComponent />;
}
