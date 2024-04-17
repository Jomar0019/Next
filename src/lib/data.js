// const users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Jane"},
// ]

import { connectToDb } from "./connectToDB"
import { Post, User } from "./models"

// const posts = [
//     {id: 1, title: "Post 1", body: "......" , userId: 1},
//     {id: 2, title: "Post 2", body: "......" , userId: 2},
//     {id: 3, title: "Post 3", body: "......" , userId: 3},
// ]


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find()
        return posts
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch post")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug })
        return post
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch post")
    }
}

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id)
        return user
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch post")
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find()
        return users
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch post")
    }
}