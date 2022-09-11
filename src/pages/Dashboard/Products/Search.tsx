import "./products.css";

import CustomSelectBox from "../../../components/CustomSelectBox";
import Header from "../../../components/Dashboard/Header";
import SearchBar from "../../../components/SearchBar";
import ProductCard from "../../../components/Dashboard/ProductCard";
import AddCard from "../../../components/Modal/Add Card/AddCard";

export default function Search() {
    const sorting = [
        { value: "price low to high", label: "Price: low to high" },
        { value: "price high to low", label: "Price: high to low" },
    ];

    return (
        <>
            <Header header="Dashboard" />
            <div className="dashboard-container flex sm:flex-col justify-between space-x-10 md:space-x-7 sm:space-x-0">
                <div className="basis-1/5 h-fit bg-dark-bg rounded-lg px-6 py-3">
                    <div className="font-bold text-lg xl:text-base pt-1">
                        Filter
                    </div>
                    <div className="sm:flex sm:space-x-7 pt-4 sm:pb-3">
                        <div>
                            <div className="font-bold">Category</div>
                            <div className="space-y-4 pt-3 pb-6 sm:pb-0">
                                <label
                                    htmlFor="category1"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category1"
                                        name="category1"
                                        value="category1"
                                    />
                                    Sweet Pastry
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="category2"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category2"
                                        name="category2"
                                        value="category2"
                                    />
                                    Velvet
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="category3"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="category3"
                                        name="category3"
                                        value="category3"
                                    />
                                    Mousse
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Promotion</div>
                            <div className="space-y-4 pt-3 pb-6">
                                <label
                                    htmlFor="promo1"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="promo1"
                                        name="promo1"
                                        value="promo1"
                                    />
                                    On Sale
                                    <span className="checkmark"></span>
                                </label>
                                <label
                                    htmlFor="promo2"
                                    className="filter-checkbox"
                                >
                                    <input
                                        type="checkbox"
                                        id="promo2"
                                        name="promo2"
                                        value="promo2"
                                    />
                                    Freeship
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-4/5 space-y-7 sm:space-y-6 sm:pt-6">
                    <div className="flex sm:flex-col-reverse space-x-5 sm:space-x-0">
                        <div className="flex items-center space-x-3 w-[70%] sm:w-full">
                            <SearchBar />
                            <button className="filled-button ml-6 w-fit">
                                Search
                            </button>
                        </div>
                        <div className="w-[30%] sm:w-full sm:pb-4">
                            <CustomSelectBox
                                data={sorting}
                                placeholder={"Default sorting"}
                                width={"100%"}
                                borderColor={"#F3A446"}
                                listBorderColor={"#F3A446"}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:px-2 md:px-0">
                        <ProductCard quantityOnRow={3} />
                    </div>
                    <AddCard />
                </div>
            </div>
        </>
    );
}
