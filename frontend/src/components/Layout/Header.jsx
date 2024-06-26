import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import { Dropdown } from "flowbite-react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 5);
  };

  const showLessItems = () => {
    setItemsToShow(Math.max(itemsToShow - 5, 5));
  };

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px]  800px:my-[10px] mt-[10px] 800px:flex items-center justify-between">
          <div className="w-15">
            <Link to="/">
              <img
                src="https://images.cooltext.com/5698841.png"
                className="w-[70%] "
                alt=""
              />
            </Link>
          </div>
          {/* search box */}

          <div className="w-[80%] relative">
            <div className="flex items-center justify-center p-5">
              <div className="rounded-lg p-5 w-2/4 right-20">
                <div className="flex">
                  <input
                    type="text"
                    className="h-[40px] w-full px-2 border-[#00803a44] border-[2px] rounded-[0.7rem] focus:border-[#008031]"
                    placeholder="Search Product"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <input
                    type="button"
                    value="Search"
                    className="bg-green-500 ml-1 p-2 rounded-tr-[1rem] rounded-br-[1rem] text-white font-semibold hover:bg-green-700 transition-colors"
                  />
                </div>
              </div>
            </div>
            {searchData && searchData.length !== 0 ? (
              <div className="absolute top-[75%] left-[25%] min-h-[30vh] bg-[#ffffff] shadow-sm-2 z-[9] p-4">
                {searchData.slice(0, itemsToShow).map((i, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] h-[3.80rem] hover:bg-slate-100"
                  >
                    <Link to={`/product/${i._id}`}>
                      <div className="w-full flex items-center">
                        <img
                          src={`${i.images[0]?.url}`}
                          alt=""
                          className="w-[70px] h-[60px] mr-[20px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                      <br className="border-b-10" />
                    </Link>
                  </div>
                ))}
                {searchData.length > itemsToShow && itemsToShow < 10 && (
                  <button
                    onClick={showMoreItems}
                    className="w-full p-2  bg-[#ffffff] hover:bg-slate-100 hover:text-gray-600 text-black  rounded text-center mr-2"
                  >
                    Show More
                  </button>
                )}
                {itemsToShow > 5 && (
                  <button
                    onClick={showLessItems}
                    className="w-full p-2 bg-[#ffffff] hover:bg-slate-100 hover:text-gray-600 text-black  rounded text-center"
                  >
                    Show Less
                  </button>
                )}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button} bg-green-500 hover:bg-green-700`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Dashboard" : "Be Seller"}{" "}
                {/* <IoIosArrowForward className="ml-1" /> */}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#004953] h-[70px]`}
      >
        {/* bg-[#3321c8] */}
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="absolute h-[50px] mt-[10px] w-[175x] hidden top-[-1rem] 1000px:block ">
              <Dropdown
                // className="dark:bg-[#00c8ff]"
                className="dropdownHover"
                style={{ backgroundColor: "#0891b2" }}
                label="All Categories"
                dismissOnClick={false}
              ></Dropdown>

              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                  style={{ backgroundColor: "#0891b2" }}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#03C03C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#03C03C] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://images.cooltext.com/5698811.png"
                // className=""
                alt=""
                className="mt-3 cursor-pointer w-[70%] "
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="flex  items-center justify-center p-5">
                <div className=" rounded-lg p-5 w-2/4 right-20">
                  <div className="flex">
                    <input
                      type="text"
                      className="h-[40px] w-full px-2 border-[#00803a44] border-[2px] rounded-[0.7rem] focus:border-[#008031] "
                      placeholder="Search Product"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <input
                      type="button"
                      value="Search"
                      className="bg-green-500 ml-1 p-2 rounded-tr-[1rem] rounded-br-[1rem] text-white font-semibold hover:bg-green-700 transition-colors"
                    />
                  </div>
                </div>
                {/* </div> */}
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div
                className={`${styles.button} bg-green-500 hover:bg-green-700 ml-4 !rounded-[4px]`}
              >
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Be Seller
                    {/* <IoIosArrowForward className="ml-1" /> */}
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
