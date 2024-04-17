import Image from "next/image"
import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div className="w-[30%] ">
        <div className="flex justify-between ">
            {post.img && <div className="bg-[#2d2b42]/40 w-[90%] h-[400px] relative">
                <Image src={post.img} fill priority sizes="100%" alt="ii" className="object-contain" />
            </div>}
            <div className="flex justify-center items-center w-[10%]">
                <p className="-rotate-90 text-nowrap text-white">{post.createdAt.toString().slice(4,16)}</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 text-white mt-3">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="text-white/60 text-sm">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="underline">Read More</Link>
        </div>
    </div>
  )
}

export default PostCard