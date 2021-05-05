import React, {Component} from 'react';
import CartImg from '../resources/shopping-cart-solid.svg';
import '../css/Main.css';

// cody i commented this part out to ignore the errors from ./image -anna
/*const data = {
    status: "success",
    items: [
      {
        id: 1,
        title: "Potatoes (4 ct)",
        price: 4.10,

      },
      {
        id: 2,
        title: "Milk",
        price: 5.85,

      },
      {
        id: 3,
        title: "Almonds",
        price: 5.13,

      },
      {
        id: 4,
        title: "Steak",
        price: 12.82,

      },
      {
        id: 5,
        title: "Hot Dogs",
        price: 3.89,

      },
      {
        id: 6,
        title: "Beef Jerky",
        price: 1.94,

      },
      {
        id: 7,
        title: "Cheese",
        price: 7.49,

      },
      {
        id: 8,
        title: "Yogurt",
        price: 4.41,

      },
      {
        id: 9,
        title: "Cereal",
        price: 3.07,

      },
      {
        id: 10,
        title: "Grapes",
        price: 6.97,

      },
      {
        id: 11,
        title: "Celery",
        price: 3.03,

      },
    ],
  };*/

const GROCERY_ITEMS = [
    {name: "Potatoes", price: 4.10},
    {name: "Milk", price: 5.85}
]

class Shop extends Component {
    render () {
		return (
		    <>
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

                <div id = "grocery-shop">
                   <table>
                       <tbody>
                           <tr>
                               <th></th>
                               <th>Item Name</th>
                               <th>Item Price</th>
                           </tr>
                           {GROCERY_ITEMS.map((item, index) => {
                               return <tr id = {index}>
                                   <td>
                                       <button>
                                           Add to cart
                                       </button>
                                   </td>
                                   <td>{item.name}</td>
                                   <td>{item.price}</td>
                               </tr>
                           })}
                       </tbody>
                   </table>
                </div>
            </>
         );
    }
}

export default Shop;
