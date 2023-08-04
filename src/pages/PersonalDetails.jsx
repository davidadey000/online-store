import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/img/logo.png";
import { useSignUpToken } from "../services/AuthContext";
import apiUrl from "../utils/config";

const PersonalDetails = ({ location }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [dateOfBirth, setDateOfBirth] = useState(""); // Change to string format
  const [countryCode, setCountryCode] = useState("+1");
  const { signUpToken } = useSignUpToken();

  const navigate = useNavigate();

  const handleContinueClick = async () => {
    try {
      const userDetails = {
        token: signUpToken,
        name: `${firstName} ${lastName}`,
        shippingAddress,
        phoneNumber: `${countryCode}${phoneNumber}`,
        gender: gender.toLowerCase(),
        dateOfBirth,
      }
      console.log(userDetails)
      await axios.post(`${apiUrl}users/step2`, {
       ...userDetails
      });

      toast.success("Account has been created successfully");
      // Now, you can navigate to the next step or handle the UI accordingly
      navigate("/signin");
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error("Error signing up:", error);
      toast.error("An error occurred while signing up. Please try again.");
    }
  };

  const countryCodes = [
    "+1",
    "+44",
    "+234",
    // Add more country codes as needed
  ];

  const genders = ["Male", "Female", "Other"];

  useEffect(() => {
    if (!signUpToken) {
      navigate("/identification");
    }
  });
  return (
    <div className="px-5 flex flex-col flex-grow bg-white items-center">
      <div className="sm:max-w-md flex-grow gap-10 mt-16 flex flex-col">
        <div className="flex flex-col gap-2 items-center">
          <div className="pt-5 flex justify-center text-6xl">
            <HiStar />
          </div>
          <h1 className="font-semibold text-xl">Personal details</h1>
          <p className="text-center px-1 mb-2 text-gray-600 sm:text-md">
            We just need you to fill in some details.
          </p>
        </div>

        <input
          type="text"
          className="w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="flex gap-2">
          <div className="w-[100px] px-1 py-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full p-1 outline-none"
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <div className="w-[100px] px-1 py-3  border-[1px] rounded-[4px] outline-red-400 border-gray-500">

          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-1 outline-none"
            >
            {genders.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
            </div>
        <input
          type="date"
          className="w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500"
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <textarea
          type="text"
          className="w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 border-gray-500"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />

        <Button
          title="Continue"
          bgColor="bg-red-400"
          onClick={handleContinueClick}
        />

        <div className="mb-4 m-auto">
          <p className="text-center text-sm font-semibold text-gray-600 mb-2 sm:text-md">
            For further support, you may visit the Help Center or contact our
            customer service team.
          </p>
          <img src={Logo} alt="jumia" className="uppercase h-5 mx-auto my-3" />
        </div>
      </div>
    </div>
  );
};

const Button = ({ title, bgColor, onClick }) => {
  return (
    <button
      className={`${bgColor} relative w-full py-3 text-[17px] text-white font-semibold rounded-[4px] shadow-md`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default PersonalDetails;
