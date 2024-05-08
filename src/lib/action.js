"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {

    const { title, description, slug, userId } = Object.fromEntries(formData);


    try {
        connectToDb();
        const newPost = new Post({
            title,
            description,
            slug,
            userId
        });
        await newPost.save();
        console.log("save to db");
        revalidatePath("/blog")
    } catch (error) {
        console.log(error);
        return "Something went wrong"
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    
    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error);
        return "Something went wrong"
    }
}


export const handleGithubLogin = async (e) => {
    "use server"
  await signIn("github");
}

export const handleLogout = async (e) => {
    "use server"
    await signOut();
}

export const register = async (formData) => {
    "use server"
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

    if(password !== passwordRepeat) { return "Password do not match!"};

    try {
        connectToDb()

        const user = User.findOne({ username })

        if(user) {
            return "Username already exists";
        }

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
        console.log("saved to db")

    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"};
    }
}
