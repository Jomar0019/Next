import PostCard from "@/components/postCard/PostCard";

const BlogPage = ({ searchParams }) => {

  console.log(searchParams)

    return (
      <div className="flex flex-wrap gap-12 py-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    )
  };
  
export default BlogPage;