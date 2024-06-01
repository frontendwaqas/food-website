/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" mt-[30px]  ">
      <h2 className="text-[24px] font-[600]">Top dishes near you</h2>
      <div className=" grid grid-cols-4  mt-[30px] gap-[30px] row-gap-[50px]">
        {food_list.map((item, index) => {
          {
            console.log(category, item.category);
          }
          {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};
