"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {

    const pathName = usePathname();
    console.log(pathName === item.title)

  return (
    <Link 
        href={item.path}
        className={`${pathName === item.path ? 'bg-[#494F55] text-white rounded-md px-4 py-2' : 'bg-none px-4 py-2 text-[#494F55]'}`}
    >
        {item.title}
    </Link>
  )
}

export default NavLink