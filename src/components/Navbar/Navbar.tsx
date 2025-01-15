import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import NavbarMiddle from "./NavbarMiddle";

export default function Navbar() {
  return (
    <div>
      <div className="h-16 flex flex-row justify-between bg-pink-500">
        <NavbarLeft />
        <NavbarMiddle />
        <NavbarRight />
      </div>
    </div>
  );
}
