"use client";
import React, { useState } from "react";
import ilustration from "@/public/images/contact/images/image 20.svg";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submitting
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); // Clear any previous errors if email is valid

    console.log(
      `Name: ${name}\n email:${email}\n ProjectDetail: ${projectDetails} `
    );
    alert(`Name: ${name}\n email:${email}\n ProjectDetail: ${projectDetails} `);
  };

  return (
    <div className="flex justify-center items-center mt-[60px] max-[500px]:mt-[50px]">
      <div className="w-[72%] relative bg-[#F3F8FF] mx-auto rounded-2xl overflow-hidden grid lg:grid-cols-2 md:grid-cols-1  max-[500px]:w-[85%]">
        {/* <div className="w-1/2 p-16"> */}
        <div className=" p-16 max-[500px]:p-8">
          <header className="font-bold text-4xl text-[#3F4655]  max-[500px]:text-[30px]  max-[500px]:text-center">
            Contact us
          </header>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pt-16 space-y-14"
          >
            {/* name */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-black outline-none bg-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* email */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Your Email"
                className="border-b border-black bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <span className="text-red-500 text-sm mt-2">{emailError}</span>
              )}
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
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
              />
            </div>

            {/* send message */}
            <button
              type="submit"
              className="mt-12 bg-[#443DFF] text-white border w-[150px] p-3 rounded-lg font-bold max-[500px]:w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* image */}
        {/* <div className="w-1/2 bg-[#F5F5F5] flex justify-center items-center text-center"> */}
        <div className=" bg-[#F5F5F5] flex justify-center items-center text-center ">
          <Image
            src={ilustration}
            alt=""
            width={300}
            className="hidden lg:block md:block sm:hidden"
          ></Image>
        </div>
      </div>
    </div>
  );
}
