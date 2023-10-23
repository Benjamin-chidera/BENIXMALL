/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { supabase } from "../../supabase/clients";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import shoe from "../../../assets/shoe.png";
import week from "../../../assets/week.png";
import { Link } from "react-router-dom";
import { Spinner } from "../../ui/Spinner";
import { Footer } from "../../ui/Footer";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../../ui/Navbar";

export const Home = () => {
  const [cat, setCat] = useState(false);
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
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  // this is for the modal
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [sub, setSub] = useState("Thans for Subscribing");

  const move = () => {
    setEmail("");
  };

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
    setSub("Thans for Subscribin");
  };

  useEffect(() => {
    setTimeout(() => {
      setSub("");
    }, 6000);
  }, [email]);

  //   this is for vintage
  const getVintage = async () => {
    const { data, error } = await supabase.from("vintage").select();

    if (error) {
      console.log(error);
    } else {
      setVintage(data);
    }

    setLoading(true);
  };

  useEffect(() => {
    getVintage();
    window.scrollTo(0, 0);
  }, [window.scrollTo(0, 0)]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
  }, []);

  //   this is for art
  const getArt = async () => {
    const { data, error } = await supabase.from("art").select();

    if (error) {
      console.log(error);
    } else {
      setArt(data);
    }
  };

  useEffect(() => {
    getArt();
  }, []);

  //   this is for discount
  const getDiscounted = async () => {
    const { data, error } = await supabase
      .from("discountedItemThisMonth")
      .select();

    if (error) {
      console.log(error);
    } else {
      setDiscounted(data);
    }
  };

  useEffect(() => {
    getDiscounted();
  }, []);

  //   this is for fitness
  const getFitness = async () => {
    const { data, error } = await supabase.from("fitness").select();

    if (error) {
      console.log(error);
    } else {
      setFitness(data);
    }
  };

  useEffect(() => {
    getFitness();
  }, []);

  //   this is for samsung phones
  const getSamsung = async () => {
    const { data, error } = await supabase.from("samsungPhone").select();

    if (error) {
      console.log(error);
    } else {
      setSamsung(data);
    }
  };

  useEffect(() => {
    getSamsung();
  }, []);

  //   this is for samsung phones
  const getWatch = async () => {
    const { data, error } = await supabase.from("watches").select();

    if (error) {
      console.log(error);
    } else {
      setWatch(data);
    }
  };

  useEffect(() => {
    getWatch();
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
    <section className="color">
      <Navbar />
      <div className=" md:mt-0 bg-white w-fit">
        <Carousel
          className="pt-20 md:pt-0"
          centerSlidePercentage={3}
          // width={"100%"}
          autoPlay
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          // emulateTouch={true}
          // className="custom-carousel"
          renderArrowPrev={() => {
            false;
          }}
          renderArrowNext={() => {
            false;
          }}
        >
          <Link to={"/nike"}>
            <div>
              <img
                src="https://lagmall.com.ng/wp-content/uploads/slider/cache/acdaae0ad43a8afc02781a1ab1583859/nike-shoes-slider.jpg"
                alt=""
                style={{
                  width: "800px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>

          <Link to={"/headset"}>
            <div>
              <img
                src="https://lagmall.com.ng/wp-content/uploads/slider/cache/41d8f4a7f0b6eb90eb0d0efc0b8a7f4e/keep-the-sound-on.jpg"
                alt=""
                style={{
                  width: "800px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>

          <Link to={"/fitness"}>
            <div>
              <img
                src="https://lagmall.com.ng/wp-content/uploads/slider/cache/403b18a98f078036e9075bac4de9a6d0/stay-fit-stay-healthy.jpg"
                alt=""
                style={{
                  width: "800px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>

          <Link to={"/bespoke"}>
            <div>
              <img
                src="https://lagmall.com.ng/wp-content/uploads/slider/cache/d7bddd1f00b030af8348a1209ed80b52/secrets-men-bespoke.jpg"
                alt=""
                style={{
                  width: "800px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>
        </Carousel>
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <Link
          to={"/accessories"}
          className="shadow p-2  md:text-lg font-bold bg-white rounded-md cursor-pointer"
        >
          Deals of the Day
        </Link>
        <Link
          to={"/nike"}
          className="shadow p-2  md:text-lg font-bold bg-white rounded-md cursor-pointer"
        >
          Top rated store
        </Link>
      </div>

      {/* this is for vintage carousel */}
      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Vintage T-Shirts
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {vintage.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/vintage/" + shirt.id}>
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* this if for art and nike sec */}

      <div className="md:flex cursor-pointer justify-center gap-5 my-5 bg-white py-4">
        <Link to={"/artHome"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2022/01/PRIMERA-BANR1-1.png"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>

        <Link to={"/nike"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2021/09/bestofnike-long.jpg"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>
      </div>

      {/* this is for art slide */}

      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Graey’s Interior Wall Art
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {art.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/art/" + shirt.id}>
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* this if for men's bespoke and men's perfume sec */}

      <div className="md:flex cursor-pointer justify-center gap-5 pt-5  bg-white py-4 mt-4">
        <Link to={"/bespoke"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2021/09/secrets-men-bespoke-l.jpg"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>

        <Link to={"/men_perfume"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2021/07/mens-perfume-long.jpg"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>
      </div>

      {/* this is for shop discounted item this month! */}

      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Shop Discounted Items this month!
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {discounted.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/discount/" + shirt.id}>
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* this is for stay fit and men's fit */}

      <div className="md:flex cursor-pointer justify-center gap-5 pt-5 bg-white py-4 mt-4">
        <Link to={"/fitness"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2021/09/stay-fit-stay-healthy-l.jpg"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>

        <Link to={"/watchHome"}>
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2020/10/naviforce-slide-sm-1.jpg"
            alt=""
            style={{ width: "550px" }}
          />
        </Link>
      </div>

      {/* this is for sports and fitness */}

      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Sports and fitness
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {fitness.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/sports/" + shirt.id}>
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="flex justify-between mx-5 flex-wrap gap-5 mt-5 items-center bg-slate-50 p-5">
        {sub}
        <div>
          <h1 className=" text-3xl">Stay in touch on our latest Arrivals!</h1>
          <p className="mt-3 text-gray-500">
            Never miss an offer on quanlity items just for you!
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Your email address"
            className="border-2 py-1 px-3 w-60 h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={move}
            className="bg-orange-600 py-1 px-5 text-white font-bold rounded-sm   md:rounded-r-md h-12"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* this is for exquisite deals on sansung products */}

      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Exquisite deals on Samsung products!
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {samsung.map((shirt) => {
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="md:flex cursor-pointer justify-center gap-5 pt-5 bg-white py-4 mt-4">
        <img src={week} alt="" style={{ width: "550px" }} />
        <img src={shoe} alt="" style={{ width: "550px" }} />
      </div>

      {/* this is for best deals on watches! */}

      <div className="shadow  py-3 mt-5 overflow-x-hidden bg-white">
        <p className="text-xl md:text-xl font-bold capitalize ms-3">
          Best Deals on Watches!
        </p>
        <Slider className="my-5 overflow-hidden " {...settings}>
          {watch.map((shirt) => {
            return (
              <div key={shirt.id} className="">
                <Link to={"/watch/" + shirt.id}>
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
                  {show ? shirt.title : `${shirt.title.substring(20, 0)}`}
                </p>
                <p className="ms-3 text-orange-700 font-bold">
                  ₦{shirt.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="flex justify-between gap-5 items-center p-3 flex-wrap bg-green-200 md:h-96">
        <div className="flex items-center gap-2">
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2020/05/delivery-truck-1-30x30.png"
            alt=""
            className=" bg-yellow-400 p-3 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl">Quick Delivery</h1>
            <hr className="mt-2 w-92 border-1 text-gray-600" />
            <p className="mt-2 text-sm">
              With our 3-day Delivery, be sure to get your product right on
              time!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2020/05/safe-30x30.png"
            alt=""
            className=" bg-green-600 p-3 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl">Easy & Safe Payment</h1>
            <hr className="mt-2 w-92 border-1 text-gray-600" />
            <p className="mt-2 text-sm">
              With our integrated Payment system, payment is 100% secure
              guaranteed!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2020/05/recycle-30x30.png"
            alt=""
            className=" bg-blue-800 p-3 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl">Return Policy</h1>
            <hr className="mt-2 w-92 border-1 text-gray-600" />
            <p className="mt-2 text-sm">
              Having product issues? Our return policy has got you covered!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://lagmall.com.ng/wp-content/uploads/2020/05/phone-30x30.png"
            alt=""
            className=" bg-blue-800 p-3 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl">Need Help?</h1>
            <hr className="mt-2 w-92 border-1 text-gray-600" />
            <p className="mt-2 text-sm max-w-lg">
              Our online support team are always ready to help you 24/7. Chat
              with us now
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};
