import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Auth = () => {
  const [state, setState] = useState("Login");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10"
          style={{ width: "350px" }}
        >
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl text-center font-semibold">
                {state} Form
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {state === "Login" ? (
                  ""
                ) : (
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Name
                    </label>
                  </div>
                )}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <FaEyeSlash
                    className={`absolute top-4 right-3 cursor-pointer ${
                      showPass ? "hidden" : ""
                    }`}
                    onClick={() => setShowPass(true)}
                  />
                  <FaEye
                    className={`absolute top-4 right-3 cursor-pointer ${
                      showPass ? "" : "hidden"
                    }`}
                    onClick={() => setShowPass(false)}
                  />
                </div>
                <div className="relative">
                  <button className="bg-red-500 text-white rounded-md px-2 py-1 w-[100%]">
                    Submit
                  </button>
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      state === "Register" ? "hidden" : ""
                    }`}
                  >
                    Don't have an account?{" "}
                    <a
                      className=" text-blue-700 cursor-pointer"
                      onClick={() => setState("Register")}
                    >
                      Create One
                    </a>
                  </p>
                  <p
                    className={`text-sm ${
                      state === "Register" ? "" : "hidden"
                    }`}
                  >
                    Have an account?{" "}
                    <a
                      className=" text-blue-700 cursor-pointer"
                      onClick={() => setState("Login")}
                    >
                      Login Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
