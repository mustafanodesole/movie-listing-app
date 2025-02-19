import React from "react";
import { IoMdDownload } from "react-icons/io";

const page = () => {
  return (
    <main className="">
      <h2 className="text-5xl">Edit</h2>

      <section className="mt-28 xl:w-3/4">
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-10">
          <label
            className="w-[473px] rounded-lg cursor-pointer bg-[#224957]  h-[480px] flex flex-col justify-center items-center border border-dotted border-white"
            htmlFor="fileUpload"
          >
            <IoMdDownload className="text-2xl" />
            <p>Drop an image</p>
            <input type="file" className="hidden" id="fileUpload" />
          </label>
        
        <form action="" className="lg:w-1/3 flex flex-col items-start gap-5">
            <input type="text" className="bg-[#224957] w-full p-2 rounded-lg outline-none" placeholder="Title"/>
            <input type="text" className="bg-[#224957]  p-2 rounded-lg outline-none" placeholder="Year"/>
            <div className="flex justify-between gap-5 ">
                <button className="border border-solid border-white px-6 py-2 rounded-lg">Cancel</button>
                <button className="px-6 py-2 rounded-lg bg-[#2BD17E] ">Submit</button>
            </div>
        </form>
        </div>
      </section>
    </main>
  );
};

export default page;
