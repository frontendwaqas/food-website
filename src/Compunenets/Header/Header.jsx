export const Header = () => {
  return (
    <>
      <div className="h-[34vw] my-[30px] mx-auto bg-[url('assets/header_img.png')] relative bg-no-repeat bg-contain ">
        <div className="absolute flex flex-col gap-[1.5vw] items-start max-w-[50%] left-[6vw] bottom-[10%] animation-fadeIn text-white">
          <h2 className="font-[500] text-[max(4.0vw,22px)] leading-[90px]">
            Order your favourite food Here!
          </h2>
          <p className="text-[1vw]">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="text-[#747474] font-[500] bg-white text-[max(1vw,13px)] rounded-[50px] px-[2.3vw] py-[1vw] ">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
};
