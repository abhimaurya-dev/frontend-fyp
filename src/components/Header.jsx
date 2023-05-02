import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex relative justify-between px-[200px] py-10 text-green-950 bg-green-100 ">
      <Link to={"/"}>
        <div className="absolute top-1 ">
          <img
            src="/assets/images/gogreen.png"
            height={"100px"}
            width={"100px"}
            alt=""
          />
        </div>
      </Link>
      <div className="display:none"></div>
      <ul className="flex gap-12 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
