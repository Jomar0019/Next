import { useState } from "react";
import NavLink from "./navLink/NavLink"
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";


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

const Links = ({ session }) => {

    const [ open, setOpen ] = useState(false);

    const isAdmin = true;

  return (
    <div>
        <div className="md:flex gap-x-4 hidden">
            {links.map(link => (
                <NavLink item={link} key={link.title}/>
            ))}
            {
                session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}

                        <form action={handleLogout}>
                            <button className="border border-white text-white rounded-md px-4 py-2 hover:text-black hover:bg-white">Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
            }
        </div>
        <button className="md:hidden bg-black text-white p-2" onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && (
                    <div className="absolute bg-white shadow-md w-[300px] h-screen p-12 right-0 top-0 flex justify-center items-center">
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