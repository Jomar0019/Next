import Image from "next/image";
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { NextResponse } from "next/server";


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  // IF YOU WANT TO DELETE ADD METHOD DELETE
  // const res = await fetch(`http://localhost:3000/api/blog/${slug}`, method:"DELETE");

  if(!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description
  }
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;
  const post = await getData(slug);


    return (
      <div className={styles.container}>
        <div className="w-1/4 h-[550px] relative">
          {post.img && <Image 
            src={post.img}
            fill
            sizes="100%"
            alt="imgfree"
            className="object-contain"
            priority
          />}
        </div>
        <div className="w-3/4 text-white p-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-3 my-6">
            <div className="w-10 h-10  relative">
              <Image src="/noavatar.png" alt="img" fill sizes="100%" className="object-contain rounded-full"/>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
            <div className="text-sm">
              <h5 className="font-bold text-white/70">Published</h5>
              <p>{post.createdAt.toString().slice(4,16)}</p>
            </div>
          </div>
          <div>
            <p>{post.description}</p>
          </div>
        </div>

        
      </div>
    );
  };
  
  export default SinglePostPage;