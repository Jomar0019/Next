"use client"
import Links from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestpage = () => {


    // CLIENT SIDE NAVIGATION 
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get("q");

    console.log(pathname, q);

    const handleClick = () => {
        console.log("clicked")
        // router.push("/")
        // router.replace("/")
        // router.refresh()
        // router.back()
        // router.forward()
    }

  return (
    <div className="text-white">
      <Links href="/" prefetch={false}>Home</Links>
      <button onClick={handleClick}>Write and Read</button>
    </div>
  )
}

export default NavigationTestpage
