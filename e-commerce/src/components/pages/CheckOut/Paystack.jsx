import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import PaystackPop from "@paystack/inline-js";
import { CartProvider, useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

export const Paystack = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const publicKey = "pk_test_a737850b02ef0e5fb83513c9a36ed732951169f0";

  const { emptyCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    const paystacks = new PaystackPop();

    paystacks.newTransaction({
      key: `${publicKey}`,
      amount: amount * 100,
      email,
      name,
      phone,

      onSuccess() {
        alert("Thanks for doing business with us! Come back soon!!");
      },
      onClose: () => alert("You canceled your transaction"),
    });

    setName("");
    setPhone("");
    setEmail("");
    setAmount("");

    setTimeout(() => {
      emptyCart();
    }, 6000);
  };

  useEffect(() => {
    const data = localStorage.getItem("login");

    if (!data) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className=" mt-20 md:mt-0 container pb-3 flex justify-center items-center color h-screen">
        <form action="" className="mt-3 ">
          <div>
            <section className="md:flex gap-5">
              <div>
                <label htmlFor=""> Name *</label>
                <br />
                <input
                  type="text"
                  className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor=""> Amount *</label>
                <br />
                <input
                  type="number"
                  className=" border mb-3 w-72 max-w-full py-2 outline-none px-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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

            <button
              type="submit"
              className="btn btn-success bg-green-800"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
