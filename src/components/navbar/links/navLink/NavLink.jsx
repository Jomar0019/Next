"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {

    const pathName = usePathname();

  return (
    <Link 
        href={item.path}
        className={`${pathName === item.path ? 'bg-white text-black rounded-md px-4 py-2' : 'bg-none px-4 py-2 text-white'}`}
    >
        {item.title}
    </Link>
  )
}

export default NavLink