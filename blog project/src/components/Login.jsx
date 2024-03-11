import React from "react";

const Login = ({ isopen, onclose }) => {
  return (
<div
  className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
    isopen ? "" : "hidden"
  }`}
>
  <div className="Login-container bg-white rounded-md p-8 w-96">
    <div className="bg-indigo-700 text-center p-5 rounded-t-md">
      <h2 className="text-xl font-semibold text-white uppercase">
        Login Here
      </h2>
    </div>
    <form className="px-4 py-6">
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md]"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f focus:shadow-md]"
        />
      </div>
      <div className="flex justify-center">
        <button
                onClick={isopen ? onclose : undefined}
                className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none mr-4"
        >
          Login
        </button>
        <button
          onClick={onclose}
          className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Close
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Login;
