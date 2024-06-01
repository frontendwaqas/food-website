/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowPopUp }) => {
  const [currState, setcurrState] = useState("LogIn");
  return (
    <div className="absolute z-[1] w-[100%]  h-[100vh] bg-[#00000090]  grid">
      <form className="place-self-center text-[#808080] w-[330px] rounded-[8px] text-[14px] animation-fadeIn bg-white flex flex-col gap-[25px] p-[25px]">
        <div className="flex items-center justify-between text-black">
          <h2 className="font-[700]">{currState}</h2>
          <img
            className="cursor-pointer w-[16px]"
            onClick={() => {
              setShowPopUp(false);
            }}
            src={assets.cross_icon}
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "LogIn" ? (
            <></>
          ) : (
            <input
              type="text"
              className="border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
              placeholder="You'r Name "
              required
            />
          )}

          <input
            type="email"
            className="border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
            placeholder="You'r Email "
            required
          />
          <input
            type="password"
            className="border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]"
            placeholder=" Password "
            required
          />
          <button className="p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer">
            {currState === "Sign Up" ? "Create Account" : "LogIn"}
          </button>
          <div className="flex items-start gap-[8px] mt-[-15px] ">
            <input type="checkbox" className="mt-[5px]" required />
            <p>Be Continuing, I Agree To The Term of use and policey.</p>
          </div>
          {currState === "LogIn" ? (
            <p>
              Create a new account?{" "}
              <span
                className="cursor-pointer text-[tomato]"
                onClick={() => {
                  setcurrState("Sign Up");
                }}
              >
                Click Here
              </span>{" "}
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="cursor-pointer text-[tomato]"
                onClick={() => {
                  setcurrState("LogIn");
                }}
              >
                Login
              </span>{" "}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
