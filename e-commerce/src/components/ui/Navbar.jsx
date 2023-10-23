/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Barbell,
  Bed,
  DeviceMobile,
  GameController,
  Heart,
  ShoppingBag,
  ShoppingCart,
  TShirt,
  Trash,
  User,
  X,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { supabase } from "../supabase/clients";
import { Loader } from "./Loader";
import Popup from "reactjs-popup";
// import Warper from "./Warper";
import "reactjs-popup/dist/index.css";
import { CaretDown, CaretRight, List } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartProvider, useCart } from "react-use-cart";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(true);
  const [cat, setCat] = useState(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const navigate = useNavigate();

  const [cats, setCats] = useState(false);
  const [cloth, setCloth] = useState(false);
  const [phone, setPhone] = useState(false);
  const [home, setHome] = useState(false);
  const [game, setGame] = useState(false);
  const [vintage, setVintage] = useState([]);
  const [art, setArt] = useState([]);
  const [discounted, setDiscounted] = useState([]);
  const [fitness, setFitness] = useState([]);
  const [samsung, setSamsung] = useState([]);
  const [watch, setWatch] = useState([]);
  const [sub, setSub] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [smCloth, setSmCloth] = useState(false);
  const [smPhone, setSmPhone] = useState(false);
  const [smHome, setSmHome] = useState(false);
  const [smGame, setSmGame] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const fetchVintage = async () => {
    setIsLoading(true);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setIsLoading(false); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("vintage")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
      setSearchResults([]);
    } else {
      setSearchResults(data);
      setIsLoading(false); // Update the state with the search results
      setSearchVisible(searchResults.length > 0);
    }
  };

  const fetchArt = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("art")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
      setSearchResults([]);
    } else {
      setSearchResults(data); // Update the state with the search results
    }
  };

  const fetchDiscount = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("discountedItemThisMonth")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
    } else {
      setSearchResults(data || []); // Update the state with the search results
    }
  };

  const fetchFitness = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("fitness")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
    } else {
      setSearchResults(data || []); // Update the state with the search results
    }
  };

  const fetchSamsung = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("samsungPhone")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
    } else {
      setSearchResults(data || []); // Update the state with the search results
    }
  };

  const fetchWatch = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const { data, error } = await supabase
      .from("watches")
      .select("")
      .ilike("title", `%${searchTerm}%`); // Search for the searchTerm in the 'title' column

    if (error) {
      console.error("Error searching for blogs:", error);
    } else {
      setSearchResults(data || []); // Update the state with the search results
    }
  };

  useEffect(() => {
    if (searchTerm.trim !== "") {
      fetchVintage();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim !== "") {
      fetchArt();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDiscount();
  }, [searchTerm]);
  useEffect(() => {
    fetchWatch();
  }, [searchTerm]);
  useEffect(() => {
    fetchSamsung();
  }, [searchTerm]);
  useEffect(() => {
    fetchFitness();
  }, [searchTerm]);

  const click = () => {
    setCats(false);
  };

  const toggleMenu = () => {
    setIsOpen(false);

    setSearchVisible(false);
  };

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  return (
    <div className="mx-auto">
      {/* this is navbar for lg screen devices */}
      <div className="hidden md:flex justify-center gap-10 items-center px-3  fixed z-20 shadow-md bg-white h-20 w-full">
        <div
          className="flex items-center text-4xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-red-600  font-extrabold">BEXIN</span>MALL{" "}
          <ShoppingCart />
          <br />
        </div>

        <input
          type="text"
          className=" border-2  h-12 border-gray-2 py-1 px-2"
          style={{ width: "550px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="SEARCH FOR PRODUCTS, BRANDS OR CATEGORIES"
        />

        <div className="flex items-center gap-2">
          <User size={30} />
          <Link to={"/Login"}>Login</Link>
        </div>

        <div className="flex">
          <Heart size={30} />
          <sup className="text-sm bg-red-600 h-5 w-5 text-center rounded-full text-white">
            0
          </sup>
        </div>

        <div className="flex">
          <button type="button" className="button" onClick={handleShow}>
            {" "}
            <ShoppingBag size={30} />
          </button>
          <sup className="text-sm bg-red-600 h-5 w-5 text-center rounded-full text-white">
            {totalUniqueItems}
          </sup>
        </div>

        {/* this is for large screen */}
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {searchTerm === "" ? (
              ""
            ) : (
              <div className="text-center mt-5 absolute z-10 bg-slate-100 left-64 hidden md:grid  grid-cols-2 space-y-5 shadow w-fit mx-auto px-5 h-96 overflow-y-scroll">
                {/* <Loader/> */}
                {searchResults.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex h-24 items-center gap-5  py-20"
                    >
                      <img
                        src={item.image}
                        className="w-20 h-20 object-cover ms-5"
                        alt=""
                      />
                      <p
                        className=" hover:underline cursor-pointer"
                        style={{ maxWidth: "200px" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* this is for the category sec */}
      <div>
        <div className="hidden md:flex relative justify-evenly pt-24  pb-3 gap-5  font-semibold text-gray-500">
          <div>
            <p
              className="flex items-center gap-2 uppercase cursor-pointer"
              onClick={() => {
                setCats(!cats);
              }}
            >
              <List size={25} />
              Catergories for you!{" "}
              <span>
                <CaretDown />
              </span>
            </p>
          </div>
          <p>Home</p>

          <Link to={"/about_Benix"}>About BenixMall</Link>
          <Link to={"/contactUs_Benix"}>Contact Us</Link>
        </div>
      </div>

      <div className="flex relative font-semibold text-gray-500">
        {cats && (
          <div className=" hidden md:block absolute w-full z-10 ">
            <div className="pe-10   space-y-10 ps-5 bg-white w-fit pb-3">
              <p
                className="flex items-center gap-2 "
                onMouseEnter={() => {
                  setCloth(!cloth);
                  setPhone(false);
                  setHome(false);
                  setGame(false);
                }}
              >
                <TShirt size={20} /> Clothing & Fashion <CaretRight />
              </p>

              <p
                className="flex items-center gap-2"
                onMouseEnter={() => {
                  setPhone(!phone);
                  setCloth(false);
                  setHome(false);
                  setGame(false);
                }}
              >
                <DeviceMobile size={20} /> Phones & Tablets <CaretRight />
              </p>

              <p
                className="flex items-center gap-2"
                onMouseEnter={() => {
                  setPhone(false);
                  setCloth(false);
                  setHome(!home);
                  setGame(false);
                }}
              >
                <Bed size={20} /> Home Decor <CaretRight />
              </p>
              <p
                className="flex items-center gap-2"
                onMouseEnter={() => {
                  setPhone(false);
                  setCloth(false);
                  setHome(false);
                  setGame(!game);
                }}
              >
                <GameController size={20} /> Gaming <CaretRight />
              </p>
              <p className="flex items-center gap-2">
                <Barbell size={20} /> Sporting Items <CaretRight />
              </p>
            </div>

            <div className="hidden md:block absolute  top-0 left-56 ms-5 font-semibold text-gray-500">
              {/* this is for clothes */}
              {cloth && (
                <section
                  className="grid grid-cols-3 gap-10   bg-slate-100 p-5"
                  onMouseLeave={() => {
                    setCloth(false);
                  }}
                >
                  <div className="1 flex flex-col space-y-3">
                    <h1>MEN'S FASHION</h1>
                    <Link to={"/menTshirt"} onClick={click}>
                      T-shirts
                    </Link>
                    <Link to={"/jacket"} onClick={click}>
                      Jackets
                    </Link>
                    <Link to={"/hoodie"} onClick={click}>
                      Hoodie
                    </Link>
                    <Link to={"/sweatShirt"} onClick={click}>
                      Sweatshirts
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>WOMEN'S FASHION</h1>
                    <Link to={"/womenTshirt"} onClick={click}>
                      T-shirts
                    </Link>
                    <Link to={"/shorts"} onClick={click}>
                      Shorts
                    </Link>
                    <Link to={"/hoodie"} onClick={click}>
                      Hoodie
                    </Link>
                    <Link to={"/sweatShirt"} onClick={click}>
                      Sweatshirts
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>WATCHES</h1>
                    <Link to={"/watchHome"} onClick={click}>
                      Men's Watches
                    </Link>
                    <Link to={"/watchHome"} onClick={click}>
                      Women's Watches
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>BOY'S</h1>
                    <Link to={"/accessories"} onClick={click}>
                      Accerssories
                    </Link>
                    <Link to={"/menTshirt"} onClick={click}>
                      T-shirts
                    </Link>
                    <Link to={"/shoe"} onClick={click}>
                      Shoes
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>GIRL'S</h1>
                    <Link to={"/accessories"} onClick={click}>
                      Accerssories
                    </Link>
                    <Link to={"/menTshirt"} onClick={click}>
                      Clothing
                    </Link>
                    <Link to={"/shoe"} onClick={click}>
                      Shoes
                    </Link>
                  </div>
                </section>
                /* this is for clothes */
              )}

              {/* this is for phone */}
              {phone && (
                <section
                  className="grid grid-cols-3 gap-10  bg-slate-100 p-5 font-semibold text-gray-500"
                  onMouseLeave={() => {
                    setPhone(false);
                  }}
                >
                  <div className="2 flex flex-col space-y-3">
                    <h1>MOBILE PHONES</h1>
                    {/* <p>Smartphones</p> */}
                    <Link to={"/samsung"} onClick={click}>
                      Samsung
                    </Link>
                    <Link to={"/iphone"} onClick={click}>
                      IOS Phones
                    </Link>
                    <Link to={"/huawei"} onClick={click}>
                      Huawei Phones
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>MOBILE ACCESSORIES</h1>
                    <Link to={"/headset"} onClick={click}>
                      Earphones & Headsets
                    </Link>
                    <Link to={"/smartPen"} onClick={click}>
                      Smart Pen
                    </Link>
                    <Link to={"/accessories"} onClick={click}>
                      Phones Pouch & Case
                    </Link>
                    <Link to={"/accessories"} onClick={click}>
                      Smart Watches
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>TABLETS</h1>
                    <Link to={"/samsungTabs"} onClick={click}>
                      Samsung Tablets
                    </Link>
                    <Link to={"/ipads"} onClick={click}>
                      Ipads
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>TOP PHONE BRANDS</h1>
                    <Link to={"/iphone"} onClick={click}>
                      Apple
                    </Link>
                    <Link to={"/samsung"} onClick={click}>
                      Samsung{" "}
                    </Link>
                  </div>
                </section>
              )}
              {/* this is for phone */}

              {/* this is for home decor */}
              {home && (
                <section
                  className="grid grid-cols-3 gap-10   bg-slate-100 p-5 font-semibold text-gray-500"
                  onMouseLeave={() => {
                    setHome(false);
                  }}
                >
                  <div className="2 flex flex-col space-y-3">
                    <h1>BED DECOR</h1>
                    <Link to={"/bedSheet"} onClick={click}>
                      Bedsheet
                    </Link>
                  </div>

                  <img
                    src="https://images.pexels.com/photos/10554465/pexels-photo-10554465.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    style={{ width: "200px" }}
                  />
                  <img
                    src="https://images.pexels.com/photos/7055769/pexels-photo-7055769.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    style={{
                      width: "200px",
                      height: "135px",
                      objectFit: "cover",
                    }}
                  />
                </section>
              )}

              {/* this is for game */}

              {game && (
                <section
                  className="grid grid-cols-3 gap-10  bg-slate-100 p-5 font-semibold text-gray-500"
                  onMouseLeave={() => {
                    setGame(false);
                  }}
                >
                  <div className="2 flex flex-col space-y-3">
                    <h1>PLAY STATION</h1>
                    <Link to={"/ps5"} onClick={click}>
                      Playstation 5
                    </Link>
                    <Link to={"/ps4"} onClick={click}>
                      Playstation 4
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>GAME PADS</h1>
                    <Link to={"/ps4Pad"} onClick={click}>
                      Sony PS4 Pad Wireless
                    </Link>
                    <Link to={"/ps4PadCamo"} onClick={click}>
                      Sony PS4 Pad Camo
                    </Link>
                  </div>

                  <div className="2 flex flex-col space-y-3">
                    <h1>TOP GAMES</h1>
                    <Link to={"/game"} onClick={click}>
                      Games
                    </Link>
                  </div>
                </section>
              )}
            </div>
          </div>
        )}
      </div>

      {/* this is a navbar for small devices */}

      <div className="md:hidden flex justify-between  fixed top-0 z-10 bg-white w-full h-20 px-2  items-center">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />

        <div
          className="flex items-center text-2xl font-bold"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-red-600 font-bold">BEXIN</span>MALL{" "}
          <ShoppingCart />
          <br />
        </div>

        <div className="flex">
          <button type="button" className="button" onClick={handleShow}>
            {" "}
            <ShoppingBag size={30} />
          </button>

          <sup className="text-sm bg-red-600 h-5 w-5 text-center rounded-full text-white">
            {totalUniqueItems}
          </sup>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden  fixed bg-slate-200 h-full mt-20 w-80 px-2 z-10">
          <input
            type="text"
            placeholder="Search for product brands Here..."
            className=" border-2 w-96  h-16 max-w-full   py-2 px-3 shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex  justify-between px-5 py-4  bg-slate-300">
            <p
              onClick={() => {
                setMenu(true);
                setCat(false);
              }}
            >
              Menu
            </p>
            <p
              onClick={() => {
                setMenu(false);
                setCat(true);
                setSmCloth(false);
                setSmGame(false);
                setSmHome(false);
                setSmPhone(false);
              }}
            >
              Categories
            </p>
          </div>

          {/* this is for sm menu */}

          {menu && (
            <div className="mt-4 space-y-7 flex flex-col ms-3 font-semibold text-gray-500">
              <Link to={"/"}>Home</Link>

              <Link to={"/about_Benix"}>About BenixMall</Link>
              <Link to={"/contactUs_Benix"}>Contact Us</Link>
              <Link to={"/Login"}>Login</Link>
            </div>
          )}

          {/* for sm category  */}

          {cat && (
            <div className="mt-4 space-y-7 ms-3 font-semibold text-gray-500">
              <p
                className="flex items-center gap-2"
                onClick={() => {
                  setSmCloth(!smCloth);
                  setSmGame(false);
                  setSmHome(false);
                  setSmPhone(false);

                  setCat(false);
                }}
              >
                <TShirt size={20} /> Clothing & Fashion
              </p>

              <p
                className="flex items-center gap-2"
                onClick={() => {
                  setSmCloth(false);
                  setSmGame(false);
                  setSmHome(false);
                  setSmPhone(!smPhone);

                  setCat(false);
                }}
              >
                <DeviceMobile size={20} /> Phones & Tablets
              </p>

              <p
                className="flex items-center gap-2"
                onClick={() => {
                  setSmCloth(false);
                  setSmGame(false);
                  setSmHome(!smHome);
                  setSmPhone(false);

                  setCat(false);
                }}
              >
                <Bed size={20} /> Home Decor
              </p>
              <p
                className="flex items-center gap-2"
                onClick={() => {
                  setSmCloth(false);
                  setSmGame(!smGame);
                  setSmHome(false);
                  setSmPhone(false);

                  setCat(false);
                }}
              >
                <GameController size={20} /> Gaming
              </p>
              <p className="flex items-center gap-2">
                <Barbell size={20} /> Sporting Items
              </p>
            </div>
          )}

          {/* this is for clothing and fashion */}
          {smCloth && (
            <div
              className="flex flex-col gap-3 ms-3 font-semibold text-gray-500"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link to={"/menTshirt"} onClick={click}>
                T-shirts
              </Link>
              <Link to={"/jacket"} onClick={click}>
                Jackets
              </Link>
              <Link to={"/hoodie"} onClick={click}>
                Hoodie
              </Link>
              <Link to={"/sweatShirt"} onClick={click}>
                Sweatshirts
              </Link>
            </div>
          )}

          {smPhone && (
            <div
              className="flex flex-col gap-3 ms-3 font-semibold text-gray-500"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link to={"/samsung"} onClick={click}>
                Samsung
              </Link>
              <Link to={"/iphone"} onClick={click}>
                IOS Phones
              </Link>
              <Link to={"/huawei"} onClick={click}>
                Huawei Phones
              </Link>
            </div>
          )}

          {smHome && (
            <div
              className="flex flex-col gap-3 ms-3m font-semibold text-gray-500"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link to={"/bedSheet"} onClick={click}>
                Bedsheet
              </Link>
            </div>
          )}

          {smGame && (
            <div
              className="flex flex-col gap-3 ms-3 font-semibold text-gray-500"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link to={"/ps5"} onClick={click}>
                Playstation 5
              </Link>
              <Link to={"/ps4"} onClick={click}>
                Playstation 4
              </Link>
            </div>
          )}

          {/* this is for small devices */}

          {isLoading ? (
            <Loader />
          ) : (
            <div onClick={toggleMenu}>
              {searchTerm && (
                <div
                  className={`text-center absolute top-20 font-semibold text-gray-500  z-10 md:hidden bg-slate-100 space-y-5 shadow w-80 px-5 h-96 overflow-y-scroll ${
                    isSearchVisible ? "block" : "hidden"
                  }`}
                >
                  {searchResults.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex h-24 items-center gap-5"
                      >
                        <img
                          src={item.image}
                          className="w-20 h-20 object-cover"
                          alt=""
                        />
                        <p className=" hover:underline">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* this is for the modal for add to cart */}

      <div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header
            closeButton
            className="bg-black text-white font-semibold text-gray-500"
          >
            <Offcanvas.Title>
              {isEmpty ? "Your Cart is Empty" : "Cart"}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {isEmpty ? (
              <div className="flex justify-center items-center h-full text-9xl font-semibold text-gray-500">
                🛒
              </div>
            ) : null}
            {isEmpty ? null : (
              <div className="text-end">
                <Trash
                  className="btn btn-sm btn-danger "
                  size={30}
                  onClick={() => {
                    emptyCart();
                  }}
                />
              </div>
            )}
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center gap-3 space-y-5 font-semibold text-gray-500"
                >
                  <X
                    size={30}
                    className="cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  />

                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      style={{ width: "90px", height: "90px" }}
                      alt=""
                      className=" object-cover"
                    />
                    <div>
                      <p className="max-w-xs">
                        {sub ? item.title : `${item.title.substring(0, 20)}`}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <p>₦{item.price.toLocaleString()}</p>
                </div>
              );
            })}

            {isEmpty ? null : (
              <div className=" shadow  mt-5 p-3 font-semibold text-gray-500">
                <h1 className=" uppercase font-bold text-xl">Cart Totals</h1>

                <div className="flex justify-between mt-2">
                  <h1 className="font-bold">Subtotal</h1>
                  <p>₦{cartTotal.toLocaleString()}</p>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between mt-2">
                  <h1 className="font-bold">Shipping</h1>
                  <p className="font-bold text-orange-600">
                    Calculate shipping
                  </p>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between mt-2">
                  <h1 className="font-bold">Total</h1>
                  <p className="font-bold text-orange-600">
                    ₦{cartTotal.toLocaleString()}
                  </p>
                </div>

                <div className="text-center my-3">
                  <button
                    className="uppercase bg-orange-600 text-white text-sm  py-2 px-5"
                    onClick={() => {
                      setShow(false);
                      navigate("/checkout");
                    }}
                  >
                    proceed to checkout
                  </button>
                </div>
              </div>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
