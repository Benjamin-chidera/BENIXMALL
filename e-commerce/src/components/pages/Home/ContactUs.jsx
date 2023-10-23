import React from 'react'
import { Navbar } from '../../ui/Navbar';
import { Footer } from '../../ui/Footer';

export const ContactUs = () => {
  return (
    <div className=" ">
      <Navbar/>
      <div className=" bg-black h-20 text-white text-center opacity-80 text-4xl flex items-center justify-center">
        Contact us
      </div>

      <div className="md:flex justify-center mt-5 gap-4 ">
        <img
          src="https://lagmall.com.ng/wp-content/uploads/2020/09/contact-600x450.jpg"
          alt=""
          style={{width:"500px", height:"400px"}}
        />

        <form action="" className="mx-3">
          <p className="max-w-md text-gray-500 font-semibold pb-4 mt-3">
            You can reach us by calling or sending us a message and we’ll get to
            you in a light’s speed!
          </p>
          <label htmlFor="">Your Name (required)</label>
          <br />
          <input
            type="text"
            className="mt-3 border-2 border-gray-400 w-96 max-w-full py-2 mb-3"
          />
          <br />
          <label htmlFor="">Your Email (required)</label>
          <br />
          <input
            type="text"
            className="mt-3 border-2 border-gray-400 w-96 max-w-full py-2 mb-3"
          />
          <br />
          <label htmlFor="">Subject</label>
          <br />
          <input
            type="text"
            className="mt-3 border-2 border-gray-400 w-96 max-w-full py-2 mb-3"
          />
          <br />
          <label htmlFor="">Subject</label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            className="mt-3 border-2 border-gray-400 w-96 max-w-full py-2 mb-3"
            rows="10"
          ></textarea>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
