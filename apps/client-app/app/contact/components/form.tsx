import React from "react";
import ilustration from "@/public/images/contact/images/image 20.svg";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center mt-16 ">
      <div className="w-4/5  relative bg-[#F3F8FF] mx-[150px] rounded-2xl flex overflow-hidden ">
        <div className="w-1/2 p-16">
          <header className="font-bold text-4xl text-[#3F4655]">
            Contact us
          </header>
          <form action="" className=" flex flex-col pt-16 space-y-14">
            {/* name */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-black outline-none bg-transparent "
              />
            </div>

            {/* phone number */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-black bg-transparent outline-none"
              />
            </div>

            {/* tell us about project */}
            <div className="flex flex-col">
              <label
                htmlFor="about project"
                className="font-normal text-[16px] text-stone-400"
              >
                Tell Us About Project
              </label>
              <input
                type="text"
                className="border-b border-black bg-transparent outline-none mt-10"
              />
            </div>

            {/* agree */}
            <div className="flex mt-14">
              <input type="checkbox" name="" id="" className="w-5 h-5" />
              <p className="ml-10">I agree to the terms of this</p>
            </div>

            {/* send message */}
            <button className="mt-12 bg-[#443DFF] text-white border w-[150px] p-3 rounded-lg font-bold">
              Send Message
            </button>
          </form>
        </div>

        {/* image */}
        <div className="w-1/2 bg-[#F5F5F5] flex justify-center items-center text-center">
          <Image src={ilustration} alt="" width={300}></Image>
        </div>
      </div>
    </div>
  );
}
