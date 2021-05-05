import React, {Component} from "react";
import CartImg from '../resources/shopping-cart-solid.svg';
import '../css/Main.css';

class Shop extends Component {
  constructor(){
    super();
  this.state = {
    items: []
  }
}

async componentDidMount(){
  await fetch('/search')
    .then(items => this.setState({items}))
    .then(console.log(this.state.items))
}
    render () {
		return (

      <div>
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
            <ul>
            {this.state.items.map(item => (
              <li key={item.id}>
              <h4> {item.name} :  {item.cost}</h4>
              <p> {item.category}</p>
              </li>
            ))}
            </ul>
        </div>
        )
    }
}

export default Shop;
