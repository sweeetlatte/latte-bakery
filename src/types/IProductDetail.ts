import { IProduct } from ".";

export interface IProductDetail {
    detail: IProduct;
    from?: {
        pathname: string;
    };
}
