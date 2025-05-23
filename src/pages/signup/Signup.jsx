import { Typography } from "antd";
import React from "react";
const Text = Typography;

import LogoSmallImage from "../../assets/images/LogoSmallImage";

export default function Signup() {
  return (
    <div className="w-full h-screen ">
      <div className="flex items-center h-[80px] bg-[#ffffff]">
        <LogoSmallImage  className="ml-[50px] h-[50px]"/>
      </div>

      <div className="flex items-center justify-center w-full bg-[#F1F5F9] h-[calc(100vh-80px)]">
        <div className=" p-10 flex flex-col  w-[90%] max-w-[500px] h-[200px] sm:h-[250px] md:h-[400px] bg-gradient-to-b from-white-500 to-[#a5c3da] rounded-[10px] shadow-2xl">
          <h2 className="text-[30px] font-bold text-[#000000]">Create Account</h2>
         
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1 text-black mt-6"
          />

          <input
            type="text"
            placeholder="Email Address"
            className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1 text-black mt-6"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1 text-black mt-6"
          />

          <p className="text-[14px] text-[#000000] font-bold self-end mt-4">Already have an account ?  <a href="/sign-in" className="text-[#13A4B4] hover:text-[#7c9ece]">SignIn</a></p>

          <button className="bg-[#13A4B4] hover:bg-[#7c9ece] text-white px-4 py-2 rounded-[10px] mt-6">Sign up</button>
        </div>

      </div>
      
    </div>
  );
}
