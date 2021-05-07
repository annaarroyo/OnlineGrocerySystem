import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Main.css';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Cart is empty</h2>
        }else{
            return (
                <>
                    <div>
                    {
                        cart.map(item =>(
                            <div className="details" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${Number(item.price * item.count).toFixed(2)}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <button className="delete" onClick={() => removeProduct(item._id)}>X</button>
                            </div>
                        ))
                    }
                    </div>

                    <div className="total">
                        <Link to="/checkout">Payment</Link>
                        <h3>Total: ${Number(total).toFixed(2)}</h3>
                    </div>
                </>
            )
        }
    }
}

export default Cart;
