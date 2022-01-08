import React from 'react'
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();
    const removefrombasket =()=>{
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
    })
    }
    return (
        <div className="checkoutProduct" style={{"display":"flex","justifyContent":"center","width":"80%"}}>
            <img src={image} style={{"width":"400px",}} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹
                        </small>
                        <strong>{price}</strong></p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_,i)=>(
                            <p><StarIcon className=" star_icon" /></p>
                        ))
                    }
                    </div> 
                    <button className="remove_item_btn" onClick={removefrombasket}>Remove from Basket</button>       
            </div>
            
        </div>
    )
}

export default CheckoutProduct
