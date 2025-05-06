import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify =-between items-center">
        <link href="/dashboard">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </link>
      </nav>
    </header>
  );
};
export default NavBar;
