import { assets } from "../../assets/assets";

export const AppDownload = () => {
  return (
    <div className="m-auto flex flex-col leading-[65px] mt-[100px] text-[20px] text-center items-center">
      <p className="text-[50px]">
        For Better Experince Download <br /> Tomato App{" "}
      </p>
      <div className="flex gap-[20px] mt-[10px]">
        <img
          src={assets.play_store}
          className="w-[140px] max-w-[180px]  transition duration-[0.2s] cursor-pointer  hover:scale-[1.05] "
          alt=""
        />
        <img
          src={assets.app_store}
          className="w-[140px] max-w-[180px]  transition duration-[0.2s] cursor-pointer  hover:scale-[1.05] "
          alt=""
        />
      </div>
    </div>
  );
};
