import React, {Component} from 'react';
import '../css/Main.css';

class Cart extends Component {
    render() {
        if(this.props.items) {
            return <div id = "grocery-cart">
                <p>Cart is empty</p>
            </div>
        }
        return (
            <>
                <nav>
                    <div id = "grocery-cart">

                        <table>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                </tr>
                                {this.props.items.map((item, index) => {
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
                </nav>
            </>
        );
    }
}

export default Cart;