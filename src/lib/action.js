"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Post } from "./models";
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
  await signIn("github");
}

export const handleLogout = async (e) => {
    await signOut();
  }
