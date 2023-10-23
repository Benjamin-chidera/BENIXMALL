import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
  TwitterLogo,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5bg9xq",
        "template_pyoaecr",
        form.current,
        "j3hqSqhoTvHJ8rDtk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmail("");
  };

  return (
    <div className=" bg-black text-gray-500 text-sm">
      <div className="grid  md:grid-cols-3 gap-5  p-7">
        <div className="1">
          <h1 className="pb-3">ABOUT</h1>
          <p className="max-w-xs">
            Benixmall is your #1 Closest Online Market place with amazing deals
            on Fashion, Clothing & Accessories, Gadgets and lots more!
          </p>
        </div>

        <div className="1">
          <h1 className="pb-3">GET STARTED</h1>
          <p>Home</p>
          <p>Market</p>
          <p>My Account</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Wholesale Items</p>
          <p>Sell on BenixMall</p>
        </div>

        <div className="1">
          <h1 className="pb-3">SITE INFO</h1>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Returns</p>
          <p>Terms of Service</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>

        <div className="1">
          <h1 className="pb-3">CONNECT WITH US ON</h1>
          <div className="flex gap-5 items-center mt-3">
            <p>
              <FacebookLogo size={30} />
            </p>

            <p>
              <InstagramLogo size={30} />
            </p>

            <p>
              <TwitterLogo size={30} />
            </p>

            <p>
              <LinkedinLogo size={30} />
            </p>
          </div>
        </div>

        <div className="1">
          <h1 className="pb-3">CONTACT</h1>

          <div className="flex items-center gap-2 mt-3">
            <PhoneCall size={30} />
            <p>09048401533</p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Envelope size={30} />
            <p className=" text-sm">benjaminbenjaminchidera2001@gmail.com</p>
          </div>
        </div>

        <div>
          <h1 className="pb-3">SUBSCRIBE TO EXCLUSIVE DEALS</h1>

          <form ref={form} onSubmit={sendEmail} className="mt-3">
            <input
              type="text"
              className=" bg-transparent border border-gray-500 py-2 px-3 w-72"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="mx-auto">
              <button className=" uppercase text-sm mt-3 bg-orange-700 rounded-md text-white py-3 px-9 font-bold">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div>
          <h1 className="pb-3">DELIVERY PARTNERS</h1>
          <div className="flex items-center gap-2 mt-2">
            <img
              src="https://lagmall.com.ng/wp-content/uploads/2020/10/gok.png"
              alt=""
              className="w-8"
            />
            <p>GOKADA</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://lagmall.com.ng/wp-content/uploads/2021/08/ftd-wh.jpg"
              alt=""
              className="w-8"
            />
            <p>FTD Logistics</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://lagmall.com.ng/wp-content/uploads/2021/08/dhl-ye.png"
              alt=""
              className="w-8"
            />
            <p>DHL</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 px-3 md:p-3  bg-slate-900">
        <p>BenixMall Nigeria &copy; 2023.</p>
        <p>Secured by Paystack</p>
      </div>
    </div>
  );
};
