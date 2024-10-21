"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Verifying with code:", verificationCode);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center w-full sm:w-1/2 p-8 sm:p-12 lg:p-24 bg-white rounded-r-3xl">
        <div className="sm:max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-4">VERIFY EMAIL</h2>
          <p className="text-gray-600 mb-8">
            Enter the verification code we sent to your email
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="verificationCode"
                className="block text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <div className="mt-1">
                <input
                  placeholder="Enter Verification Code"
                  id="verificationCode"
                  name="verificationCode"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-xs text-gray-400">
              Didn't receive the code?{" "}
              <button
                onClick={() => console.log("Resending verification code")}
                className="underline text-blue-500"
              >
                Resend
              </button>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-400">
              {`I have already verified my email `}
              <button
                onClick={() => router.push("/login")}
                className="underline text-blue-500"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden sm:block w-1/2 lg:w-1/2 relative">
        <div className="h-full w-full flex items-center justify-center bg-blue-500 rounded-l-3xl">
          <Image
            src="/images/auth-images/verify.png"
            alt="Verify Email"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
