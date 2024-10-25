"use client";
import React, { ChangeEvent, useState, useRef } from "react";
import Image from "next/image";
import ilustration from "@/public/images/contact/images/image 20.svg";
import emailjs from "@emailjs/browser";

interface Props {}

const initContactForm = {
  Username: "",
  email: "",
  comment: "",
};

const ContactForm: React.FC<Props> = ({}) => {
  const form = useRef<HTMLFormElement>(null);
  const [user, setUser] = useState(initContactForm);
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    comment: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChanged = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));

    // Clear error for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (d: ChangeEvent<HTMLFormElement>) => {
    d.preventDefault();

    // Basic validation
    let isValid = true;
    const newErrors = { email: "", username: "", comment: "" };

    if (!user.Username) {
      newErrors.username = "Username is required.";
      isValid = false;
    }

    if (!validateEmail(user.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!user.comment) {
      newErrors.comment = "Please tell us about your project.";
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      emailjs
        .sendForm(
          "service_tj3eurh",
          "template_jo8jdsg",
          form.current!,
          "mVuEZyoDDt8JqPRyn"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });

      console.log("Form submitted successfully: ", user);
      setUser(initContactForm); // Reset form after successful submission
    }
  };

  const isFormValid = user.Username && user.email && user.comment;

  return (
    <div className="flex justify-center items-center mt-[60px] max-[500px]:mt-[50px] text-black">
      <div className="w-[72%] relative bg-[#F3F8FF] mx-auto rounded-2xl overflow-hidden grid lg:grid-cols-2 md:grid-cols-1  max-[500px]:w-[85%]">
        <div className="p-16 max-[500px]:p-8">
          <header className="font-bold text-4xl text-[#3F4655]  max-[500px]:text-[30px]  max-[500px]:text-center">
            Contact us
          </header>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col pt-16 space-y-14"
          >
            {/* Username */}
            <div className="flex flex-col">
              <input
                type="text"
                name="Username"
                placeholder="Username"
                value={user.Username}
                onChange={handleChanged}
                className="border-b border-black bg-transparent outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChanged}
                className="border-b border-black bg-transparent outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Tell us about project */}
            <div className="flex flex-col">
              <textarea
                name="comment"
                id="comment"
                className="bg-transparent outline-none border-b border-black resize-y"
                placeholder="Tell Us About Project"
                value={user.comment}
                onChange={handleChanged}
              ></textarea>
              {errors.comment && (
                <p className="text-red-500 text-sm">{errors.comment}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`mt-12 w-[150px] p-3 rounded-lg font-bold max-[500px]:w-full ${
                isFormValid
                  ? "bg-[#443DFF] text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
              disabled={!isFormValid} // Disable button if form is incomplete
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="bg-[#F5F5F5] flex justify-center items-center text-center">
          <Image
            src={ilustration}
            alt="illustration"
            width={300}
            objectFit=""
            className="hidden lg:block md:block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
