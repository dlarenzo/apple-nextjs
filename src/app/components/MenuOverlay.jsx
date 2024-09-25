import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col h-screen w-screen transition duration-950 ease-in-out">
      {links.map((link, index) => (
        <li key={index} className=" w-full font-medium text-3xl my-2 ml-2">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
