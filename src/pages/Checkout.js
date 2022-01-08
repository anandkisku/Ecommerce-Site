import React from "react";
import { useStateValue } from "../components/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";


function Checkout() {
  const [{ basket },setBasket] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shoping Basket is empty</h2>
          </div>
        ) : (
          <div className="checkout_info">
            <h2 className="checkout_title">Your Shoping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
      <div className="checkout_right">
        <h1>Subtotal</h1>
        <Subtotal />

      </div>
      )}
    </div>
  );
}

export default Checkout;
