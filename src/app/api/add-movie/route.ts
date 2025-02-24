import Connect from "@/lib/connection";
import { NextRequest, NextResponse } from "next/server";
// import multer from "multer";
import Movie from "@/model/movieModel";

export async function POST(request: NextRequest, response: NextResponse) {
  await Connect();

  try {
    const reqBody = await request.json();
    const { title, year, image } = reqBody;

    if (!image) {
      return NextResponse.json(
        {
          message: "image is required",
        },
        { status: 401 }
      );
    }

    const newMovie = new Movie({ title, year, image });

    const savedMovie = await newMovie.save();

    return NextResponse.json({
      message: "movie added successfully",
      movie: savedMovie,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "error while uploading movies",
      details: error,
    });
  }
}
