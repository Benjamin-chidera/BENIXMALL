import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import { Paystack } from "./Paystack";

export const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const {
    isEmpty,

    items,

    cartTotal,
  } = useCart();

  const [move, setMove] = useState(items);

  console.log(move);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    try {
      if (firstName === "") {
        throw new Error("Please Complete the form before payment");
      }
      if (surName === "") {
        throw new Error("Please Complete the form before payment");
      }
      if (phone === "") {
        throw new Error("Please Complete the form before payment");
      }
      if (email === "") {
        throw new Error("Please Complete the form before payment");
      }
      if (address === "") {
        throw new Error("Please Complete the form before payment");
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ firstName, surName, phone, email, address })
      );

      navigate("/paystack");
      setMove([]);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  useEffect(() => {
    const data = localStorage.getItem("login");

    if (!data) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container pt-3 md:mt-0 pb-5 ">
      {isEmpty ? (
        <div className="text-center my-5 text-lg text-gray-400">
          <p>
            Before you Proceed to checkout, you must add some products to your
            shopping cart.
          </p>

          <p className="mt-2">
            You will find a lot of products on our Shopping page.
          </p>

          <button
            className="mt-3 bg-orange-600 py-3 px-5 rounded-md text-white font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            Return to shop
          </button>
        </div>
      ) : (
        <div className=" md:flex justify-between">
          <div>
            <h1 className=" uppercase font-bold text-lg">BILLING & shipping</h1>
            <form action="" className="mt-3 " onSubmit={handlePayment}>
              <section className=" md:flex gap-5 justify-between">
                <div>
                  <section className="md:flex gap-5">
                    <div>
                      <label htmlFor="">First name *</label>
                      <br />
                      <input
                        type="text"
                        className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="">Surname *</label>
                      <br />
                      <input
                        type="text"
                        className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                      />
                    </div>
                  </section>

                  <section className="md:flex gap-5">
                    <div>
                      <label htmlFor="">Phone Number*</label>
                      <br />
                      <input
                        type="tel"
                        className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="">Email Address *</label>
                      <br />
                      <input
                        type="email"
                        className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </section>

                  <div>
                    <label htmlFor="">Home Address *</label>
                    <br />
                    <input
                      type="text"
                      className=" border mb-3 w-96 max-w-full py-2 outline-none px-2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h1 className=" uppercase font-bold ">Your order</h1>

                  <div className="flex justify-between gap-5 mt-3">
                    <h1 className="font-bold mb-3">PRODUCT</h1>
                    <h1 className="font-bold mb-3">Price</h1>
                  </div>

                  {move.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="flex justify-between gap-5 mt-3">
                          <div>
                            <img
                              src={item.image}
                              style={{ width: "90px" }}
                              alt=""
                            />
                            <p className="text-sm max-sm text-gray-400">
                              {item.title}
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-400">
                              ₦{item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <section className="flex gap-5 mt-3 justify-between">
                    <h1 className="font-bold">SUBTOTAL</h1>
                    <p className="text-orange-600 font-bold">
                      ₦{cartTotal.toLocaleString()}
                    </p>
                  </section>
                  <hr className="my-3" />
                  <section className="flex gap-5 mt-3 justify-between">
                    <h1 className="font-bold">TOTAL</h1>
                    <p className="text-orange-600 font-bold text-xl">
                      ₦{cartTotal.toLocaleString()}
                    </p>
                  </section>
                </div>
              </section>

              {message && (
                <p className=" absolute bg-blue-500 p-2 text-white rounded-md shadow-2xl">
                  {message}
                </p>
              )}

              <div className="text-center ">
                <button
                  type="submit"
                  className="bg-orange-600 text-white py-3 px-8 md:px-40 rounded-md font-extrabold"
                >
                  PLACE ORDER
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
