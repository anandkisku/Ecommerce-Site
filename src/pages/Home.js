import React from "react";
import "./Home.css";
import Products from "../components/Products";
import fan from "../images/fan.jpg"
import watch from "../images/watch.jpg"
import Tshirt from "../images/Tshirt.jpg"
import beanbag from "../images/beanbag.jpg"
import Shoes from "../images/shoes.jpg"
import headphone from "../images/headphone.jpg"

function Home() {
  return (
    <div className="Home">
        <div>
            
            <div className="home_row">
               <Products
                 id="12321341"
                 title="Orient Electric Desk-27 Trendz 400mm High Speed Table Fan (Slate Grey)"
                 price={1499}
                 rating={4}
                 image ={fan}
               />
               <Products
                 id="12321342"
                 title="Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt"
                 price={399}
                 rating={3}
                 image={Tshirt}
               />
            </div>
            <div className="home_row">
              <Products
                  id="12321343"
                  title="Bavincis Marcia Silver and Black I Automatic Watch"
                  price={4499}
                  rating={4}
                  image={watch}
              />
              <Products
                  id="12321344"
                  title="Nike Men Free Trainer V7 Running Shoes"
                  price={1999}
                  rating={5}
                  image={Shoes}
              />
              <Products
                  id="12321345"
                  title="HiFiMAN HE400SE Wired Over The Ear Headphone (Silver)"
                  price={1199}
                  rating={3}
                  image={headphone}
               />
            </div>
            <div className="home_row">
              <Products
                  id="12321346"
                  title="LEXAVI Brand - XXXL Combo Beanbag with Footrest Prefilled Density Beans - (Blue)"
                  price={2999}
                  rating={4}
                  image={beanbag}
               />
            </div>
        </div>
    </div>       
  );
}

export default Home;
