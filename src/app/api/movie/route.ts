import Connect from "@/lib/connection";
import { NextRequest, NextResponse } from "next/server";
import Movie from "@/model/movieModel";


export async function GET(request : NextRequest){
    await Connect()
    try {
            const movies = new Movie();
            return NextResponse.json({
                success : true,
                movies : movies
            })
    } catch (error) {
            return NextResponse.json({
                message : "Error Occured while getting movies",
                error : error
            })
    }
}