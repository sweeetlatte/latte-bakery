import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

import cartIcon from "../../assets/icons/cart.svg";
import { randomNumber } from "../../utils/functions";

type Variant = "grid" | "row";

type quantityOnRow = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
    openModalAddProduct: () => void;
    selectProduct: (product: IProduct) => void;
    type?: string;
    quantity?: number;
    variant?: Variant;
    quantityOnRow?: quantityOnRow;
}

export default function ProductCard({
    openModalAddProduct,
    selectProduct,
    type,
    quantity = 16,
    variant = "grid",
    quantityOnRow = 4,
}: Props) {
    const [productData, setProductData] = useState<IProduct[]>();
    console.log(productData);

    useEffect(() => {
        (async () => {
            const responseData = await fetchProductData();

            if (responseData) {
                setProductData(responseData);
            }
        })();
    }, []);

    return productData ? (
        <div
            className={
                variant === "row"
                    ? "grid w-full grid-cols-5 auto-cols-max mx-auto place-items-center place-self-center gap-5"
                    : `grid w-full grid-cols-${quantityOnRow} sm:grid-cols-2 auto-cols-max mx-auto place-items-center place-self-center gap-5`
            }
        >
            {type !== undefined
                ? productData
                      .filter((item: IProduct) => item.type === type)
                      .map((productItem, index) => (
                          <div
                              key={index}
                              className="w-[204px] 2xl:w-[180px] xl:w-[180px] lg:w-[150px] sm:w-[126px] h-[245px] lg:h-[251px] px-6 xl:px-4 sm:px-5 py-5 bg-dark-bg rounded-lg text-left text-sm"
                          >
                              <Link
                                  to="/dashboard/detail"
                                  state={{ detail: productItem }}
                              >
                                  <img
                                      className="h-[117px] sm:h-[86px] w-full object-cover"
                                      src={productItem.image}
                                      alt="cake"
                                  />
                              </Link>

                              <div className="pt-4 sm:flex sm:flex-col sm:justify-between sm:h-[59%]">
                                  <div>
                                      {new Intl.NumberFormat("de-DE", {
                                          style: "currency",
                                          currency: "VND",
                                      }).format(productItem.price)}
                                  </div>
                                  <div className="flex sm:flex-col sm:space-y-3 justify-between items-center pt-2">
                                      <Link
                                          to="/dashboard/detail"
                                          title={productItem.name}
                                          state={{ detail: productItem }}
                                          className="font-medium text-primary text-overflow w-[85px]"
                                          style={{ WebkitLineClamp: 2 }}
                                      >
                                          {productItem.name}
                                      </Link>
                                      <button
                                          className="sm:hidden border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex justify-center items-center lg:text-[0px] sm:text-xs sm:w-full"
                                          onClick={() => {
                                              console.log(
                                                  "data se: ",
                                                  productItem
                                              );

                                              selectProduct(productItem);
                                              openModalAddProduct();
                                          }}
                                      >
                                          <img
                                              className="lg:mr-0 xl:mr-1 sm:mr-3"
                                              src={cartIcon}
                                              alt="cart icon"
                                          />
                                          Add
                                      </button>
                                      <Link
                                          to="/dashboard/detail"
                                          state={{ detail: productItem }}
                                          className="hidden sm:block w-full h-max mt-5 lg:text-[0px] sm:text-xs"
                                      >
                                          <button className="w-full sm:flex items-center border border-primary bg-primary pl-2 pr-2.5 py-1 rounded-md">
                                              <img
                                                  className="lg:mr-0 xl:mr-1 sm:mr-3"
                                                  src={cartIcon}
                                                  alt="cart icon"
                                              />
                                              Add
                                          </button>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))
                : quantity &&
                  randomNumber(productData, quantity).map(
                      (productItem, index) => (
                          <div
                              key={index}
                              className="w-[204px] xl:w-[180px] lg:w-[150px] sm:w-[126px] h-[245px] lg:h-[251px] px-6 xl:px-4 sm:px-5 py-5 bg-dark-bg rounded-lg text-left text-sm"
                          >
                              <Link
                                  to="/dashboard/detail"
                                  state={{ detail: productItem }}
                              >
                                  <img
                                      className="h-[117px] sm:h-[86px] w-full object-cover"
                                      src={productItem.image}
                                      alt="cake"
                                  />
                              </Link>
                              <div className="pt-4 sm:flex sm:flex-col sm:justify-between sm:h-[59%]">
                                  <div>
                                      {new Intl.NumberFormat("de-DE", {
                                          style: "currency",
                                          currency: "VND",
                                      }).format(productItem.price)}
                                  </div>
                                  <div className="flex sm:flex-col sm:space-y-3 justify-between items-center pt-2">
                                      <Link
                                          to="/dashboard/detail"
                                          title={productItem.name}
                                          state={{ detail: productItem }}
                                          className="font-medium text-primary text-overflow w-[85px]"
                                          style={{ WebkitLineClamp: 2 }}
                                      >
                                          {productItem.name}
                                      </Link>
                                      <button
                                          className="sm:hidden border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex justify-center items-center lg:text-[0px] sm:text-xs sm:w-full"
                                          onClick={() => {
                                              console.log(
                                                  "data se: ",
                                                  productItem
                                              );

                                              selectProduct(productItem);
                                              openModalAddProduct();
                                          }}
                                          // onClick={() =>
                                          //     navigate("edit-address", {
                                          //         state: { address: addressItem },
                                          //     })
                                          // }
                                      >
                                          <img
                                              className="lg:mr-0 xl:mr-1 sm:mr-3"
                                              src={cartIcon}
                                              alt="cart icon"
                                          />
                                          Add
                                      </button>
                                      <Link
                                          to="/dashboard/detail"
                                          state={{ detail: productItem }}
                                          className="hidden sm:block w-full h-max mt-5 lg:text-[0px] sm:text-xs"
                                      >
                                          <button className="w-full sm:flex items-center border border-primary bg-primary pl-2 pr-2.5 py-1 rounded-md">
                                              <img
                                                  className="lg:mr-0 xl:mr-1 sm:mr-3"
                                                  src={cartIcon}
                                                  alt="cart icon"
                                              />
                                              Add
                                          </button>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      )
                  )}
        </div>
    ) : (
        <></>
    );
}
