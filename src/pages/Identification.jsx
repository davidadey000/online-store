import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { HiStar, HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/img/logo.png";
import { useEmail } from "../services/AuthContext";
import apiUrl from "../utils/config";

const Identification = () => {
  const { email, setEmail } = useEmail(); // Use the useEmail hook
  const [isValidEmail, setIsValidEmail] = useState(true);

  const buttonData = [
    {
      title: "Continue",
      bgColor: "bg-red-400",
      icon: null,
    },
    {
      title: "Log in with Google",
      bgColor: "bg-black",
      icon: <HiUserCircle className="absolute top-[35%] left-3" />,
      classes: "mt-16",
    },
  ];

  const navigate = useNavigate();
  const emailSchema = Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: false }, // To disallow the use of top-level domains (e.g., .com, .net)
  });

  const handleContinueClick = async () => {
    const validationResult = emailSchema.validate(email);

    if (validationResult.error) {
      setIsValidEmail(false);
      return;
    }

    setIsValidEmail(true);
    setEmail(email); // Update the shared email state

    try {
      const response = await axios.get(`${apiUrl}users/checkEmail`, {
        params: {
          email: email,
        },
      });

      const data = response.data;

      if (data.exists) {
        navigate(`/signin`); // Pass email as a query parameter
      } else {
        navigate("/signup");
      }
    } catch (error) {
      toast.error("Error checking email:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  return (
    <div className="px-5 flex flex-col  flex-grow bg-white items-center">
      <div className="sm:max-w-md flex-grow gap-10  mt-16 flex flex-col">
      <div className="flex flex-col gap-2 items-center">
          <div className="pt-5 flex justify-center text-6xl">
            <HiStar />
          </div>
          <h1 className=" font-semibold text-xl">
            Welcome to Jumia
          </h1>
          <p className=" text-center px-1 mb-2 text-gray-600 sm:text-md">
          Type your e-mail or phone number to log in or create a Jumia account.
        </p>
        </div>
       
        <div>
          <>
            <input
              type="email"
              className={`w-full text-md p-3 outline-red-400 border-[1px] rounded-[4px] ${
                !isValidEmail
                  ? "border-red-700 placeholder-red-700"
                  : "border-gray-500 "
              }`}
              placeholder="Email or Mobile Number"
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <small className="text-red-700 block font-medium p-2 leading-tight">
                Either the email or the phone number entered is not valid
              </small>
            )}
          </>
        </div>

        <Button onClick={handleContinueClick} {...buttonData[0]} />

        <Button {...buttonData[1]} />

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

export default Identification;

const Button = ({ title, icon, bgColor, classes, onClick }) => {
  return (
    <button
      className={`${bgColor} ${classes} relative w-full py-3 text-[17px] text-white font-semibold rounded-[4px] shadow-md`}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
};
