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
import { Footer } from "../../ui/Footer";
import { Navbar } from "../../ui/Navbar";
export const HeadsetDesign = () => {
  const [shirt, setShirt] = useState([]);
  const [vintage, setVintage] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const { data, error } = await supabase
      .from("headset")
      .select()
      .eq("id", id);
    if (error) {
      console.log(error.message);
    } else {
      setShirt(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getVintage = async () => {
    const { data, error } = await supabase.from("headset").select();

    if (error) {
      console.log(error);
    } else {
      setVintage(data);
    }
  };

  useEffect(() => {
    getVintage();
  }, []);

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
    <div className="">
      <Navbar/>
      <div className=" pt-24 md:pt-7 px-5">
        {shirt.map((item) => {
          return (
            <div
              className="flex gap-5 justify-between  flex-wrap md:flex-nowrap"
              key={item.id}
            >
              <img
                src={item.image}
                style={{ width: "400px", height: "400px", maxWidth: "100%" }}
                alt=""
              />
              <div>
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="text-xl mt-3 text-red-700 font-extrabold">
                  ₦{item.price}
                </p>
                <p className="mt-3 text-gray-600">Units Sold: 2</p>

                <div className="flex gap-3">
                  <button className="mt-2 bg-orange-600 text-white font-bold py-2 px-12 rounded-sm">
                    ADD TO CART
                  </button>
                </div>

                <div>
                  <p className="my-3 font-semibold text-gray-500 border-2 py-2 px-5 border-dashed">
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

                  <p className="mt-2">
                    <b>Categories</b>: {item.category}
                  </p>
                  <p className="mt-2">
                    <b>Tags:</b> headset
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
                    <p className="max-w-sm">{item.description}</p>
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

        <div className="shadow p-3 mt-5">
          <p className="text-xl md:text-xl font-bold capitalize ">
            REALATED PRODUCTS
          </p>
          <Slider className="mt-5 overflow-hidden " {...settings}>
            {vintage.map((shirt) => {
              return (
                <div key={shirt.id} className="">
                  <Link to={"/headsetProducts/" + shirt.id}>
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
                    {shirt.title}
                  </p>
                  <p className="ms-3 text-orange-700 font-bold">
                    ₦{shirt.price}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
