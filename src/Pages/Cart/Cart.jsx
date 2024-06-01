import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="max-w-[78%] m-auto">
      <div className="">
        <div className="">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="my-[10px] bg-[#e2e2e2] h-[2px] border-none " />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="" key={index}>
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
