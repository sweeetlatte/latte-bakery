import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types";
import { fetchProductData } from "../../app/api";

import cartIcon from "../../assets/icons/cart.svg";
import { randomNumber } from "../../utils/functions";

type Variant = "grid" | "row";

interface Props {
    openModalAddProduct: () => void;
    type?: string;
    quantity?: number;
    variant?: Variant;
}

export default function ProductCard({
    openModalAddProduct,
    type,
    quantity = 16,
    variant = "grid",
}: Props) {
    const [productData, setProductData] = useState<IProduct[]>();

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
                    : "grid w-full grid-cols-4 sm:grid-cols-2 auto-cols-max mx-auto place-items-center place-self-center gap-5"
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
                                          onClick={openModalAddProduct}
                                          className="border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex justify-center items-center lg:text-[0px] sm:text-xs sm:w-full"
                                      >
                                          <img
                                              className="lg:mr-0 xl:mr-1 sm:mr-3"
                                              src={cartIcon}
                                              alt="cart icon"
                                          />
                                          Add
                                      </button>
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
                              <div className="pt-4">
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
                                      onClick={openModalAddProduct}
                                      className="border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex justify-center items-center lg:text-[0px]"
                                  >
                                      <img
                                          className="lg:mr-0 xl:mr-1"
                                          src={cartIcon}
                                          alt="cart icon"
                                      />
                                      Add
                                  </button>
                              </div>
                          </div>
                      )
                  )}
        </div>
    ) : (
        <></>
    );
}
