import { IProduct } from ".";

export interface IProductDestail {
    detail: IProduct;
    from?: {
        pathname: string;
    };
}
