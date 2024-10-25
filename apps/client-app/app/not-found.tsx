import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] p-36">
      <h1 className="text-[150px] font-extrabold text-white tracking-widest">   
        404
      </h1>
      <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <Link href="/" className="mt-5">
        <button className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
          </span>
        </button>
      </Link>
    </main>
  );
}