/* eslint-disable react/prop-types */
import { menu_list } from "../../assets/assets";

export const ExplorMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-[500] text-[#262626] text-[35px]">
          Explore Our Menu
        </h1>
        <p className="max-w-[60%] text-[20px]">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="flex text-center my-[20px] overflow-x-scroll overflow-hidden   justify-between gap-[30px]">
          {menu_list.map((item, index) => {
            return (
              <div
                className=""
                onClick={() => {
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  );
                }}
                key={index}
              >
                <img
                  className={`w-[7.5vw] cursor-pointer rounded-[50%] transition duration-[0.2s] min-w-[80px] ${
                    category === item.menu_name
                      ? "border-[4px] border-[tomato] p-[2px]"
                      : ""
                  }`}
                  src={item.menu_image}
                  alt=""
                />
                <p className="mt-[10px] text-[#747474] cursor-pointer text-[20px]">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        <hr className="my-[10px] bg-[#e2e2e2] h-[2px] border-none " />
      </div>
    </>
  );
};
