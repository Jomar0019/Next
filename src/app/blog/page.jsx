import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";


// FETCH DATA WITH API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {});

//   if(!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json();
// }

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {});
  
    if(!res.ok) {
      throw new Error("Something went wrong")
    }
  
    return res.json();
 }
  


export const metadata = {
  title: "Blog Page",
  description: "Blog Page Description"
}

const BlogPage = async () => {

  // FETCH DATA WITH API
  const posts = await getData();

 // FETCH DATA WITHOUT API
  // const posts = await getPosts();

    return (
      <div className="flex flex-wrap gap-12 py-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    )
  };
  
export default BlogPage;