import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="text-[#d9d9d9] mt-[100px] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px]">
      <div className="w-[100%] grid grid-cols-[2fr,1fr,1fr] gap-[80px]">
        <div className="left  flex flex-col gap-[20px] items-start ">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ullam esse a quasi fugiat impedit, porro quo ex sequi autem omnis
            quaerat ut voluptatibus dolor praesentium iure alias laboriosam
            enim!
          </p>
          <div className="flex items-center gap-[15px]">
            <img src={assets.linkedin_icon} />
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
          </div>
        </div>
        <div className="center  flex flex-col gap-[20px] items-start ">
          <h2 className="text-white text-[30px] font-[600]">COMPANY</h2>
          <ul>
            <li className="mb-[10px]">Home</li>
            <li className="mb-[10px]">About Us</li>
            <li className="mb-[10px]">Delivery</li>
            <li className="mb-[10px]">Privacy policy</li>
          </ul>
        </div>
        <div className="right  flex flex-col gap-[20px] items-start ">
          <h2 className="text-white text-[30px] font-[600]">Get Into Touch</h2>
          <ul>
            <li className="mb-[10px]">+356-783-42</li>
            <li className="mb-[10px]">contect@tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] my-[20px] bg-gray-400 border-none" />
      <p>Copyright 2024 @ Tomat.com - All Right Reserved</p>
    </div>
  );
};
