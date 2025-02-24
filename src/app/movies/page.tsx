'use client'
import React, { useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { movies } from "@/lib/movie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


import Connect from "@/lib/connection";
import axios from "axios";
const page = () => {
  const router = useRouter();
  const handleLogout = async () => {
     await axios.get('/api/logout').then((res) => console.log(res)).catch((error) => console.log(error));
    router.push("/");
  }


  useEffect(() => {
    Connect();

  })

  return (
    <main className="">
      <section className="flex justify-between">
        <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center  gap-2">
          <p className="">My Movies</p>

          <Link href={"/create-movie"}>
            <IoAddCircleOutline />
          </Link>
        </div>

        <div className="text-lg md:text-2xl flex justify-center items-center gap-2">
          <p className="">Logout</p>
          <button className="" onClick={handleLogout}>
            <MdLogout />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 py-10 justify-between">
        {movies.map((movie, i) => (
          <Link href={'/edit-movie'}>
            <div
              className="bg-[#092C39] rounded-xl flex flex-col items-center p-2"
              key={i}
            >
              <Image
                src={movie.imageUrl}
                className="w-full"
                width={300}
                height={400}
                alt=""
              />
              <div className="text-start w-full p-2">
                <p>{movie.title}</p>
                <p>{movie.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="hover:bg-[#2BD17E]" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="hover:bg-[#2BD17E] text-white"
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default page;
