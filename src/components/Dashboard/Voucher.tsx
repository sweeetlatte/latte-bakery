import { useState } from "react";

import Icons from "../Icons";

import voucher2 from "../../assets/icons/voucher2.svg";

interface Props {
    type: string;
}

export default function Voucher({ type }: Props) {
    const [selectedVoucher, setSelectedVoucher] = useState<number>();

    const voucher = [
        {
            title: "BAKERY OFF 50% - Happy Friyay!",
            content: "Orders from 100.000 VND - 1 day left",
            type: "discount",
        },
        {
            title: "BAKERY OFF 50% - Happy Friyay!",
            content: "Orders from 100.000 VND - 1 day left",
            type: "discount",
        },
        {
            title: "BAKERY OFF 50% - Happy Friyay!",
            content: "Orders from 100.000 VND - 1 day left",
            type: "discount",
        },
        {
            title: "FREE SHIPPING - MAX 50.000 vnd",
            content: "Orders from 100.000 VND - 1 day left",
            type: "shipping",
        },
        {
            title: "FREE SHIPPING - MAX 50.000 vnd",
            content: "Orders from 100.000 VND - 1 day left",
            type: "shipping",
        },
    ];

    return (
        <>
            {voucher
                .filter((item) => item.type === type)
                .map((item, index) => (
                    <div>
                        <div
                            className="bg-dark-bg rounded-lg py-4 pl-4 pr-10 text-sm text-caption relative"
                            onClick={() => setSelectedVoucher(index)}
                        >
                            <div className="absolute right-4 top-4 w-5 h-5 bg-light rounded-full">
                                {index === selectedVoucher ? (
                                    <Icons.Tick />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="flex items-center space-x-3">
                                <img src={voucher2} alt="voucher icon" />
                                <div className="space-y-2">
                                    <p className="text-sm text-primary">
                                        {item.title}
                                    </p>
                                    <p className="text-[9px] text-white border border-primary px-1 w-max">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}
