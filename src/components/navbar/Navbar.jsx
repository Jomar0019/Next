"use client";

import Links from "./links/Links"

const Navbar = () => {

  return (
    <div className="flex justify-between items-center h-[80px] bg-white px-6 md:px-[40px]">
      <div className="text-2xl font-bold text-[#494F55]">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
