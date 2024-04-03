import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className="w-[30%] ">
        <div className="flex justify-between ">
            <div className="bg-[#2d2b42]/40 w-[90%] h-[400px] relative">
                <Image src="https://images.pexels.com/photos/20750259/pexels-photo-20750259/free-photo-of-pigeon-point-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className="object-contain" />
            </div>
            <div className="flex justify-center items-center w-[10%]">
                <p className="-rotate-90 text-nowrap text-white">Jan 12 1230</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 text-white mt-3">
            <h2 className="font-bold text-xl">Title</h2>
            <p className="text-white/70 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, necessitatibus.</p>
            <Link href="/blog/post" className="underline">Read More</Link>
        </div>
    </div>
  )
}

export default PostCard