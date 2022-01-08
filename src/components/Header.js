import React from "react";
import { Link } from "react-router-dom";
import BsFillCartPlusFill from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
const [{basket},dispatch] = useStateValue();
    console.log(basket);

  return (
    <div className="header" style={{"display":"flex","justifyContent":"center",}}>
      <div className="header_search" style={{"width":"400px","marginLeft":"350px"}}>
        <input className="header_searchInput" />
        <button style={{"marginInlineStart":"10px","backgroundColor":"#21a007","width":"140px","borderRadius":"4px"}}> Search</button>
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionlineone"> Hello </span>
            <p className="header_optionlinetwo"> SignIn </p>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionlineone">Returns</span>
            <p className="header_optionlinetwo">To Home</p>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionbasket">
            <BsFillCartPlusFill className="header_shopingkart" />
            <span className="header_optionlineone basket_count">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
