import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row  text-black p-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact us</h2>
          <p className="mb-4">
            Welcome to ISHOP CENTER Customer Service What would you like help
            with today? You can quickly take care of most things , or connect
            with us when needed.
          </p>
          <p className="mb-4">Amman, 00000, </p>
          <p className="mb-4">+962 79999999999</p>
          <p className="mb-4">i-shop@gmail.com</p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="bg-[#ffffff] p-8 shadow-sm rounded-lg"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-black py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
