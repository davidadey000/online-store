import axios from "axios";
import React, { useContext, useState } from "react";
import { HiEye, HiEyeOff, HiStar, HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/img/logo.png";
import { AuthContext, useEmail, useSignUpToken } from "../services/AuthContext";
import apiUrl from "../utils/config";
import Joi from "joi";
import { useEffect } from "react";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const { email } = useEmail(); // Use the useEmail hook
  const { setSignUpToken, signUpToken } = useSignUpToken();

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
    {
      title: "Sign Up",
      bgColor: "bg-red-400",
      icon: null,
    },
  ];

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(true);
  };

  const handleSignUpClick = async () => {
    const passwordSchema = Joi.string().min(5).required();

    const passwordValidationResult = passwordSchema.validate(password);
    if (passwordValidationResult.error) {
      setIsValidPassword(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setIsValidPassword(true);
    setPasswordsMatch(true);
    try {
      const response = await axios.post(`${apiUrl}users/step1`, {
        email,
        password,
      });

      const { token } = response.data;
      setSignUpToken(token);
      console.log(signUpToken);

      // Now, you can navigate to the next step or handle the UI accordingly
      navigate("/personal-details");
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error("Error signing up:", error);
      toast.error("An error occurred while signing up. Please try again.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!email) {
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
          <h1 className="font-semibold text-xl">Create your account</h1>
          <p className="text-center px-1 mb-2 text-gray-600 sm:text-md">
            Let's get started by creating your account. To keep your account
            safe, we need a strong password.
          </p>
        </div>

        <div>
          <div className="flex items-center p-3 rounded-[4px] bg-gray-500 justify-between text-white">
            <p className="font-semibold">{email}</p>
            <button onClick={() => navigate(-1)}>Edit</button>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 ${
                !isValidPassword ? "border-red-700" : "border-gray-500 "
              }`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="absolute top-[35%] right-2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HiEye className="text-gray-500" />
              ) : (
                <HiEyeOff className="text-gray-500" />
              )}
            </span>
          </div>
          {!isValidPassword && (
            <small className="text-red-600 block font-medium p-2 leading-tight">
              The password is not valid!
            </small>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full text-md p-3 border-[1px] rounded-[4px] outline-red-400 ${
                !passwordsMatch ? "border-red-700" : "border-gray-500 "
              }`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="absolute top-[35%] right-2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HiEye className="text-gray-500" />
              ) : (
                <HiEyeOff className="text-gray-500" />
              )}
            </span>
          </div>
          {!passwordsMatch && (
            <small className="text-red-600 block font-medium p-2 leading-tight">
              Passwords do not match!
            </small>
          )}
        </div>
        <Button onClick={handleSignUpClick} {...buttonData[2]} />
        <div className="text-center">
          <a href="/forgot-password" className="block text-red-300 underline">
            Forgot Password?
          </a>
        </div>
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

export default SignUp;

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
