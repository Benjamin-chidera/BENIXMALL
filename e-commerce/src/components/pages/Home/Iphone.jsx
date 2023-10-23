import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/clients";
import { Link, useParams } from "react-router-dom";
import {
  FacebookLogo,
  Heart,
  LinkedinLogo,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Slider from "react-slick";
import { CartBtn } from "../../ui/CartBtn";
import { Spinner } from "../../ui/Spinner";
import { Footer } from "../../ui/Footer";
import { Navbar } from "../../ui/Navbar";

export const Iphone = () => {
  const [shirt, setShirt] = useState([]);
  const [vintage, setVintage] = useState([]);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data, error } = await supabase.from("iphone").select().eq("id", id);
    if (error) {
      console.log(error.message);
    } else {
      setShirt(data);
    }

    setLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
  }, []);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [window.scrollTo(0, 0)]);

  const getVintage = async () => {
    const { data, error } = await supabase.from("samsungPhone").select();

    if (error) {
      console.log(error);
    } else {
      setVintage(data);
    }
  };

  useEffect(() => {
    getVintage();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="color">
      <Navbar/>
      <div className=" pt-24 md:pt-7 px-5">
        {shirt.map((item) => {
          return (
            <div className="md:flex gap-5 bg-white p-2" key={item.id}>
              <img
                src={item.image}
                style={{ width: "300px", height: "300px" }}
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl max-w-md">{item.title}</h1>
                <p className="text-xl mt-3 text-red-700 font-extrabold">
                  ₦{item.price.toLocaleString()}
                </p>
                <p className="mt-3 text-gray-600">Units Sold: 2</p>

                <CartBtn item={item} />

                <div>
                  <p className="my-3 font-semibold text-sm text-gray-500 border-2 py-2 px-5 border-dashed">
                    Estimated Delivery is on October 14, 2023
                  </p>
                </div>

                <div className="mt-3 flex gap-1 items-center">
                  <Heart size={30} />
                  <p className="font-semibold text-gray-400">Add to Wishlist</p>
                </div>
                <hr className="my-5" />
                <div>
                  <p className="mt-2">
                    <b>SKU:</b> N/A
                  </p>

                  <p className="mt-2 max-w-md">
                    <b>Categories</b>: {item.category}
                  </p>
                  <p className="mt-2">
                    <b>Tags:</b> beach outfit, beach shirt, vintage shirt
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <p className="font-semibold">Share:</p>
                    <FacebookLogo size={25} />
                    <TwitterLogo size={25} />
                    <LinkedinLogo size={25} />
                    <WhatsappLogo size={25} />
                    <TelegramLogo size={25} />
                  </div>

                  <div>
                    <p className="max-w-md">{item.description}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2>DELIVERY & RETURNS</h2>

                <div className="flex items-center gap-5">
                  <img
                    src="https://lagmall.com.ng/wp-content/uploads/2020/08/delivery.png"
                    alt=""
                    className="w-7"
                  />
                  <p style={{ maxWidth: "200px" }}>
                    Normally delivered within 3 to 5 working days for Local
                    shipping and 10 to 14 days from overseas. Please see exact
                    dates on checkout
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-5">
                  <img
                    src="https://lagmall.com.ng/wp-content/uploads/2020/08/online-shopping.png"
                    alt=""
                    className="w-7"
                  />
                  <p style={{ maxWidth: "200px" }}>
                    Free return for 2 days only. See return policy for more
                    details
                  </p>
                </div>

                <hr className="my-5" />

                <div>
                  <h1>PRODUCT WARRANTY</h1>
                  <div className="flex items-center gap-5 mt-5">
                    <img
                      src="https://lagmall.com.ng/wp-content/uploads/2020/08/shield.png"
                      alt=""
                      className="w-7"
                    />
                    <p style={{ maxWidth: "200px" }}>
                      Please check product specifications for warranty details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          REALATED PRODUCTS
        </p>
        <Slider className="mt-2 overflow-hidden " {...settings}>
          {vintage.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/samsung/" + shirt.id}>
                  <img
                    src={shirt.image}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                    className=""
                    alt=""
                  />
                </Link>

                <p
                  className="ms-3 text-sm md:text-lg"
                  style={{ maxWidth: "200px" }}
                >
                  {show ? shirt.title : `${shirt.title.substring(40, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">₦{shirt.price}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      <Footer/>
    </div>
  );
};
