const { getUser } = require("@/lib/data")

// const getData = async (userId) => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});

//     if(!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();

// }

// mongodb+srv://<username>:<password>@cluster0.qqnogza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const PostUser = async ({ userId }) => {


    // const user = await getData(userId);

    const user = await getUser(userId);

  return (
    <div className="text-sm">
        <h5 className="font-bold text-white/70">Author</h5>
        <p>{user.username}</p>
  </div>
  )
}

export default PostUser
