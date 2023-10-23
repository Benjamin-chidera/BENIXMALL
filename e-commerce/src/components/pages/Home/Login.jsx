import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      if (name === "") {
        throw new Error("You must provide a name");
      }

      if (email === "") {
        throw new Error("You must provide an email");
      }
      if (password.length < 4) {
        throw new Error("password must be at least 5 characters");
      }

      localStorage.setItem("login", JSON.stringify({ name, email, password }));
    } catch (error) {
      setLogin(error.message);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("login");

    if (data) {
      navigate("/checkout");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLogin("");
    }, 5000);
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 container">
      <div className="">
        <h1 className="mb-5 text-2xl font-bold max-w-md ">
          Welcome to <b className="text-red-500">BENIX</b>MALL Please Login to
          continue shopping
        </h1>
        {login && (
          <p className=" absolute right-5  bg-danger text-white p-2">{login}</p>
        )}
        <form action="" onSubmit={handleLogin}>
          <label htmlFor="">Name *</label>
          <br />
          <input
            type="text"
            placeholder="Input Name"
            className="border my-2 w-72 h-10 ps-2 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="">Email *</label>
          <br />
          <input
            type="email"
            placeholder="Input Email Address"
            className="border my-2 w-72 h-10 ps-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Password *</label>
          <br />
          <input
            type="password"
            placeholder="Input Password"
            className="border my-2 w-72 h-10 ps-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="btn btn-sm btn-success">Login</button>
        </form>
      </div>
    </div>
  );
};
