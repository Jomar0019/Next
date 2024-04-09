import PostCard from "@/components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {});

  if(!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}

const BlogPage = async () => {

  const posts = await getData();

    return (
      <div className="flex flex-wrap gap-12 py-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    )
  };
  
export default BlogPage;