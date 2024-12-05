import { Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">LOGO</h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input placeholder="Search here..." className="w-[300px] pl-9" />
        </div>
      </div>
      <button className="bg-teal-400 hover:bg-teal-500">Become a Seller</button>
    </header>
  );
};

export default Navbar;
