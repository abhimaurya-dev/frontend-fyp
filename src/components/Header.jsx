import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-[200px] py-10 text-green-950 bg-green-100 ">
      <div>LOGO</div>
      <ul className="flex gap-10 text-xl">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Header;
