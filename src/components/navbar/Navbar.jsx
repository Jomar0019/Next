"use client";

import Link from "next/link";
import Links from "./links/Links"
import { auth } from "@/lib/auth";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className="flex justify-between items-center h-[80px] bg-[#0a0a23] px-6 md:px-0">
      <div className="text-3xl font-bold text-white">
        <Link href="/" >Logo</Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar
