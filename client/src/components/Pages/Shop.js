import React, {Component} from "react";
import CartImg from '../resources/shopping-cart-solid.svg';
import '../css/Main.css';
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

export class Shop extends Component {

    static contextType = DataContext;

    render() {
        const {products, addCart} = this.context;
        return (
            <>
                <div>
                    <nav className="navbar">
                        <div className="nav-container">
                            <i className="nav-delivery">
                                <label htmlFor="delivery-time">Choose a delivery time:</label>
                                <select name="delivery-time" id="delivery-time">
                                    <option value="Friday">Friday at 1:00 PM</option>
                                    <option value="Friday">Friday at 2:00 PM</option>
                                </select>
                            </i>
                            <ul className="nav-menu">
                                <li className="nav-item">
                                    <span>0</span>
                                    <img src={CartImg} alt="" width="20"></img>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <div id="product">
                        {
                            products.map(product => (
                                <div className="card" key={product._id}>
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.src} alt=""/>
                                    </Link>
                                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                                        <span>${product.price}</span>
                                        <p>{product.description}</p>
                                        <button onClick={() => addCart(product._id)}>Add to cart</button>
                           
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Shop