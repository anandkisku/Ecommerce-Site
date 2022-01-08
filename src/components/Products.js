import React from "react";
import "./products.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";


function Products({ id, title, image, price, rating }) {

  const [{},dispatch] = useStateValue();
  const addToBasket =()=>{
      // items to basket
      dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        image:image,
        id:id,
        title:title,
        price:price,
        rating:rating
        }
       }
      )
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>
                <StarIcon className=" star_icon" />
              </span>
            ))}
        </div>
      </div>
      <div className="img_btn">
      <img src={image} alt="" />
      <button className="add_to_basket_btn" onClick={addToBasket}>Add to kart</button></div>
    </div>
  );
}

export default Products;
