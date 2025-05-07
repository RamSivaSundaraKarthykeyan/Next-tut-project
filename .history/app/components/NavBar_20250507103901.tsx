import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

const NavBar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify =-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5">{session && session?.user ? (
          
        )</div>
      </nav>
    </header>
  );
};
export default NavBar;
