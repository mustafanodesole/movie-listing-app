"use client";
import Image from "next/image";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { user as userCredentails } from "@/lib/user";
import Cookies from "js-cookie";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      user.email === userCredentails.email &&
      user.password === userCredentails.password
    ) {
      const token = Math.random().toString(36).substring(2);
      Cookies.set("auth" , token, {expires : 1})

      toast.success("logged in successfully");
      router.push("/movies");

    } else {
      toast.error("please check your credentials");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <main className="flex justify-center items-center min-h-[75vh]">
      <div className="w-full max-w-xs p-6">
        <h2
          className="text-center"
          style={{ fontSize: "clamp(2.125rem, 1.6316rem + 2.6316vw, 4rem)" }}
        >
          Sign In
        </h2>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            className="bg-[#224957] rounded-xl text-white py-2 px-3 outline-none"
            placeholder="Email"
          />

          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
            className="bg-[#224957] rounded-xl text-white py-2 px-3 outline-none"
            placeholder="password"
          />

          <span className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-5 h-5 appearance-none border border-[#224957] rounded-md bg-[#224957] checked:border-transparent checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center checked:before:w-full checked:before:h-full"
            />
            <label htmlFor="remember" className="ml-2 ">
              Remember me
            </label>
          </span>
          <button type="submit" className="bg-[#2BD17E] rounded-md p-2">
            Login
          </button>
          <Toaster />
        </form>
      </div>
    </main>
  );
}
