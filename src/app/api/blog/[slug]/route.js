import { connectToDb } from "@/lib/connectToDB"
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {

    const { slug } = params;

    try {
        connectToDb();

        const post = await Post.findone({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post")
    }
}

export const DELETE = async (req, { params }) => {

    const { slug } = params;

    try {
        connectToDb();

        await Post.deleteOne({slug});
        return NextResponse.json("post deleted");
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete post")
    }
}