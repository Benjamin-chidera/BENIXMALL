import React from "react";
import { Footer } from "../../ui/Footer";
import { Navbar } from "../../ui/Navbar";

export const About = () => {
  return (
    <div>
      <Navbar/>
      <div className=" pb-3 container py-5">
        <p className=" font-semibold text-gray-400">
          Welcome to Lagmall, we try to blend your user experience and a real
          shopping experience to create a user-friendly online platform that
          encompasses every corner, enhance the profits of every sales
          entrepreneur and bring about maximum customer satisfaction. Our
          uniqueness is found to facilitate transaction of products/services as
          well as info-train visitors , to provide online customers with the
          latest news and offers of gadgets, fashion, accessories and services,
          designed with its extremely easy features to use for the purchase of
          various products.
        </p>
        <div className="flex  gap-3 items-center mt-3">
          <img
            src="https://benjamin2001.netlify.app/assets/pic-425cfe43.jpg"
            alt=""
            className="h-80  7-10 object-contain"
          />
          <p className=" capitalize font-bold italic ">
            benjamin chidera benjamin -{" "}
            <span className=" text-gray-400">CEO, Founder</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
