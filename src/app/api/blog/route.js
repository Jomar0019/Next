import { connectToDb } from "@/lib/connectToDB"
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        connectToDb();

        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}