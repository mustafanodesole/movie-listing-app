"use client";
import axios from "axios";
import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";

const page = () => {


  
  const [movie, setMovie] = useState({
    image: "",
    title: "",
    year: "",
    file: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name == "image" && files) {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setMovie({
            ...movie,
            image: reader.result as string,
            file: file,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setMovie({
        ...movie,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("/api/add-movie", movie)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(movie);
  };

  return (
    <main className="">
      <h2 className="text-5xl">Create a new movie</h2>

      <section className="mt-28 xl:w-3/4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-10"
        >
          {movie.image ? (
            <img
              src={movie.image}
              alt="Preview"
              className="rounded-lg w-[473px] h-[480px] object-cover"
            />
          ) : (
            <label
              className="w-[473px] rounded-lg cursor-pointer bg-[#224957]  h-[480px] flex flex-col justify-center items-center border border-dotted border-white"
              htmlFor="fileUpload"
            >
              <IoMdDownload className="text-2xl" />
              <p>Drop an image</p>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="hidden"
                id="fileUpload"
                accept="image/*"
              />
            </label>
          )}
          <div className="lg:w-1/3 flex flex-col items-start gap-5">
            <input
              onChange={handleChange}
              type="text"
              className="bg-[#224957] w-full p-2 rounded-lg outline-none"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={handleChange}
              type="text"
              className="bg-[#224957]  p-2 rounded-lg outline-none"
              placeholder="Year"
              name="year"
            />
            <div className="flex justify-between gap-5 ">
              <button
                onClick={() =>
                  setMovie({ title: "", year: "", image: "", file: null })
                }
                className="border border-solid border-white px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#2BD17E] "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
