import Select from "react-select";

interface Props {
    data: any;
    placeholder: string;
    width: string;
    height?: string;
    borderColor?: string;
    controlBackgroundColor?: string;
    listBorderColor?: string;
}

export default function CustomSelectBox({
    data,
    placeholder,
    width,
    height = "54px",
    borderColor = "white",
    controlBackgroundColor = "#323232",
    listBorderColor,
}: Props) {
    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: controlBackgroundColor,
            width: width,
            height: height,
            color: "white",
            borderColor: borderColor,
            whiteSpace: "nowrap",
        }),
        option: (styles: any, { isFocused }: any) => ({
            color: "white",
            backgroundColor: isFocused ? "#F3A446" : "#323232",
            padding: "8px 12px",
        }),
        menuList: (styles: any) => ({
            ...styles,
            padding: 0,
            border: `1px solid ${listBorderColor}`,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: "white",
        }),
        indicatorSeparator: (styles: any) => ({
            ...styles,
            display: "none",
        }),
    };

    const MyComponent = () => (
        <Select
            styles={colorStyles}
            placeholder={placeholder}
            options={data}
            // menuIsOpen={true}
        />
    );

    return <MyComponent />;
}
