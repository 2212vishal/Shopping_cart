import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex sm:flex-row flex-col max-w-6xl mx-auto overflow-y-hidden">
      <div className="sm:w-2/3 w-full">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-y-40 sm:w-1/3 mr-10 sm:mt-10 sm:mb-10 w-full ml-10">

        <div className="flex flex-col ">
          <div className="text-green-600 font-semibold mb-10">Your Cart</div>
          <div className="text-green-600 font-bold text-lg">Summary</div>
          <p className="mt-2">
            <span>Total Items: {cart.length}/--</span>
          </p>
        </div>

        <div >
          <p >Total Amount: <span className="font-bold">${totalAmount}</span> </p>
          <button class="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center mt-60">
      <h1 className="font-bold mb-4">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
