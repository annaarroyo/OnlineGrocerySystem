import React, {Component} from "react";
import CartImg from '../resources/shopping-cart-solid.svg';
import '../css/NavBar.css';

// cody i commented this part out to ignore the errors from ./image -anna
/*const data = {
    status: "success",
    items: [
      {
        id: 1,
        title: "Potatoes (4 ct)",
        price: 4.10,
        image: require('./images/img01.jpg'),
        category: "Produce",
        img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000",
        cantidad: 1,
      },
      {
        id: 2,
        title: "Milk",
        price: 5.85,
        image: require('./images/img02.jpg'),
        category: "Dairy",
        img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
        cantidad: 1
      },
      {
        id: 3,
        title: "Almonds",
        price: 5.13,
        image: require('./images/img03.jpg'),
        category: "Dry Goods",
        img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606325289&w=1000",
        cantidad: 1
      },
      {
        id: 4,
        title: "Steak",
        price: 12.82,
        image: require('./images/img04.jpg'),
        category: "Produce",
        img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
        cantidad: 1
      },
      {
        id: 5,
        title: "Hot Dogs",
        price: 3.89,
        image: require('./images/img05.jpg'),
        category: "Produce",
        img1: " https://stockx-360.imgix.net/Nike-Dunk-Low-SP-Kentucky/Images/Nike-Dunk-Low-SP-Kentucky/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606322330&w=1000",
        cantidad: 1
      },
      {
        id: 6,
        title: "Beef Jerky",
        price: 1.94,
        image: require('./images/img06.jpg'),
        category: "Dry Goods",
        img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
        cantidad: 1
      },
      {
        id: 7,
        title: "Cheese",
        price: 7.49,
        image: require('./images/img07.jpg'),
        category: "Dairy",
        img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
        cantidad: 1
      },
      {
        id: 8,
        title: "Yogurt",
        price: 4.41,
        image: require('./images/img08.jpg'),
        category: "Dairy",
        img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Clot-Blue-Silk/Images/Nike-Air-Force-1-Low-Clot-Blue-Silk/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606325265&w=1000",
        cantidad: 1
      },
      {
        id: 9,
        title: "Cereal",
        price: 3.07,
        image: require('./images/img09.jpg'),
        category: "Dry Goods",
        img1: "https://stockx-360.imgix.net/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Images/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1606323250&w=1000",
        cantidad: 1
      },
      {
        id: 10,
        title: "Grapes",
        price: 6.97,
        image: require('./images/img10.jpg'),
        category: "Produce",
        img1: "https://stockx-360.imgix.net/Nike-Dunk-High-Black-Varsity-Maize/Images/Nike-Dunk-High-Black-Varsity-Maize/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1609445259&w=1000",
        cantidad: 1
      },
      {
        id: 11,
        title: "Celery",
        price: 3.03,
        image: require('./images/img011.jpg'),
        category: "Produce",
        img1: "https://stockx-360.imgix.net/Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img",
        img2: ".jpg?auto=format,compress&q=90&updated_at=1609438911&w=1000",
        cantidad: 1
      },
    ],
  };*/

class Shop extends Component {
    render () {
		return (
            <nav className = "navbar">
                <div className="nav-container"> 
                <i className="nav-delivery">
                    <label for="delivery-time">Choose a delivery time:</label>
                    <select name="delivery-time" id="delivery-time">
                        <option value="Friday">Friday at 1:00 PM</option>
                        <option value="Friday">Friday at 2:00 PM</option>
                    </select>
                </i>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <span>0</span>
                            <img src={CartImg} alt="" width="20" ></img>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Shop;
