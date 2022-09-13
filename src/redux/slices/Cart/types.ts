export interface ICartProduct {
    id: number;
    name: string;
    price: number;
    filling: string;
    size: string;
    image: string;
    quantity: number;
}

export type CartData = {
    items: Array<ICartProduct>;
};
