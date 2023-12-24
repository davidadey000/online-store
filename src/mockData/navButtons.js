import {
  HiUserCircle,
  HiQuestionMarkCircle,
  HiShoppingCart,
} from "react-icons/hi";

export const navbuttonData = [
  {
    link: "",
    name: "account",
    icon: <HiUserCircle className="hidden cmd:block mx-1 mb-[-2px]" />,
  },
  {
    link: "",
    name: "help",
    icon: <HiQuestionMarkCircle className="hidden cmd:block mx-1 mb-[-2px]" />,
  },
  {
    link: "cart",
    name: "cart",
    icon: <HiShoppingCart className="hidden cmd:block mx-1 mb-[-2px]" />,
  },
];
