"use client";
import Image from "next/image";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { user as userCredentails } from "@/lib/user";
import Cookies from "js-cookie";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [btnDissable, setBtnDissable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notValid, setNotValid] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/movies");
    } catch (error: any) {
      setNotValid(true);
      console.log(error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDissable(false);
    } else {
      setBtnDissable(true);
    }
  }, [user]);

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
          {notValid ? <p className="text-red-500">Password or Email is incorrect</p> : <p className="text-white "></p>}
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
          {btnDissable ? "No Login" : "Login"}
          </button>
          <Toaster />
        </form>
      </div>
    </main>
  );
}
