
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-row  m-10  border-b-4 border-black"> 
        <div className="h-[150px] w-[250px] mr-5">
          <img src={item.image} className="h-full w-full " />
        </div>
      <div className="flex flex-col">
          <h1 className="font-bold mb-3">{item.title}</h1>
          <h1>{item.description.substring(0,150)}...</h1>
          <div className="flex flex-row items-end justify-between mb-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            {/* <div className="cursor-pointer "
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div> */}
            <button onClick={removeFromCart} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2  rounded-full">
              Delete
            </button>
          </div>

        </div>

    </div>
  );
};

export default CartItem;
