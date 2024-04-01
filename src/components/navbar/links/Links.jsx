import { useState } from "react";
import NavLink from "./navLink/NavLink"


const links = [
    {
        title: "Homapage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },
];

const Links = () => {

    const [ open, setOpen ] = useState(false);


    const handleMenu = () => {
        setOpen(!open);
    };


const session = true;
const isAdmin = true;

  return (
    <div>
        <div className="md:flex gap-x-4 hidden">
            {links.map(link => (
                <NavLink item={link} key={link.title}/>
            ))}
            {
                session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
                        <button className="border border-[#494F55] text-[#494F55] rounded-md px-4 py-2 hover:text-white hover:bg-[#494F55]">Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
            }
        </div>
        <button className="md:hidden bg-black text-white p-2" onClick={handleMenu}>Menu</button>
            {
                open && (
                    <div className="absolute bg-white shadow-md w-[300px] h-screen p-12 right-0 top-0 flex justify-center items-center">
                        <button className="absolute top-5 right-5" onClick={handleMenu}>close</button>
                        <div className="flex flex-col gap-y-5">
                            {links.map(link => (
                                <NavLink item={link} key={link.title}/>
                            ))}
                        </div>
                    </div>
                )
            }
    </div>
  )
}

export default Links