import Login from "@/views/Login";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs p-6">
        <h2
          className="text-center"
          style={{ fontSize: "clamp(2.125rem, 1.6316rem + 2.6316vw, 4rem)" }}
        >
          Sign In
        </h2>
        <form action="" className="flex flex-col gap-4">
          <input
            type="email"
            className="bg-[#224957] rounded-xl text-white py-2 px-3 outline-none"
            placeholder="Email"
          />

          <input
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
          <button className="bg-[#2BD17E] rounded-md p-2">Login</button>
        </form>
      </div>
    </main>
  );
}
