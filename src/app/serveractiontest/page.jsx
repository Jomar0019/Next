import { addPost, deletePost } from "@/lib/action"

const ServerActionPage = () => {

  return (
    <div>
      <form action={addPost} className="flex flex-col gap-4 w-[400px]">
        <input type="text" name="title" className="p-2" placeholder="Title" />
        <input type="text" name="description" className="p-2" placeholder="Desc" />
        <input type="text" name="slug" className="p-2" placeholder="Slug" />
        <input type="text" name="userId" className="p-2" placeholder="User ID" />
        <button className="bg-white p-2 cursor-pointer">Add post</button>
      </form>


      <form action={deletePost}>
        <input type="text" name="id" id="" className="mt-2 p-2 mr-2" placeholder="Id"/>
        <button className="bg-white p-2">Delete Post</button>
      </form>
    </div>
  )
}

export default ServerActionPage
