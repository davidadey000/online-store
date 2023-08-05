// src/components/Contact.js

import React from "react";

const Contact = () => {
  const isMobile = window.innerWidth <= 768;

  const handleCall = () => {
    // Implement your call functionality here
    // For demonstration purposes, let's log a message
    console.log("Initiating call...");
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100">
      <div
        className={`bg-white p-8 ${
          isMobile ? "shadow-md" : ""
        } lg:my-16 rounded-md max-w-md w-full`}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="text-center hidden lg:block">
   
              <p className="mt-4 text-gray-600">
                For phone inquiries, please call: <br />
                <span className="font-bold text-blue-600">
                  +1 (123) 456-7890
                </span>
              </p>
            
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>

          <div className="mt-6 text-center lg:hidden">
            <p className="mb-2 text-gray-600">
              For phone inquiries, please call:
            </p>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onClick={handleCall}
            >
              Call Us: +1 (123) 456-7890
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
