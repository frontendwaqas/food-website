import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

/* eslint-disable react/prop-types */
const FoodItem = ({ id, name, image, price, description, category }) => {
  const { addToCart, removeFromCart, setCardItems, cardItems } =
    useContext(StoreContext);

  return (
    <div className="w-[100%] m-auto rounded-[15px]  animation-fadeIn shadow-[0px 0px 10px #676767]">
      <div className="relative">
        <img className="w-[100%] rounded-t-[15px]" src={image} />
        {!cardItems[id] ? (
          <img
            className="w-[35px] rounded-[50%] absolute bottom-[15px] cursor-pointer right-[15px]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute bottom-[15px] flex items-center gap-[10px] p-[6px]  rounded-[50px] bg-[#fff] right-[15px]">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cardItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-[500px]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} />
        </div>
        <p className="text-[#676767] text-[15px]">{description}</p>
        <p className="text-[tomato] text-[22px] my-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
