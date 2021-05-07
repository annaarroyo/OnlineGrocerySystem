import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css';
import {Card, Form, Col, Row, Container} from 'react-bootstrap';
import {DataContext} from '../Context'
import { Redirect } from 'react-router-dom';



class Checkout extends Component {

    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            redirect: false,
        }
		this.handleChange = this.handleChange.bind(this);
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

    handleOrder(e) {
        this.setState({redirect: true});
    }

    renderRedirect(){
        if (this.state.redirect) {
            return <Redirect to='/success'/>
          }
    }


    render() {
        const {cart,total} = this.context;
        return (

            <div className = "container">
                 {this.renderRedirect()}
                <body>

                <Container>
                    <h1>
                        Checkout
                    </h1>
                </Container>
                <Container>
                    <Row>
                        <Col >
                            <h4>
                                Delivery Address
                            </h4>
                            <Card>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Jane"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Doe"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formStreetField1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="1234 Street Way"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formStreetField2">
                                    <Form.Label>Address 2 (optional)</Form.Label>
                                    <Form.Control type="text" placeholder="APT #"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="San Antonio"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="TX"></Form.Control>
                                </Form.Group>

                            </Card>
                        </Col >
                        <Col>
                            <h4>
                            Cart
                            </h4>
                            <Card>
                                {
                                    cart.map(item =>(



                                        <div className="details" key={item._id}>
                                            <img src={item.src} alt=""/>
                                            <div className="row">
                                                <h2>{item.title}</h2>
                                                <span>${Number(item.price * item.count).toFixed(2)}</span>
                                            </div>
                                            <p>{item.content}</p>
                                            <div className="amount"></div>
                                      </div>

                                    ))
                            }
                            <h3>Total: ${Number(total).toFixed(2)}</h3>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <h4>
                        Payment
                        </h4>
                        <Col>
                            <Form.Group controlId="formCardName">
                                <Form.Label>Name on card</Form.Label>
                                <Form.Control type="text" ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formCardExp">
                                <Form.Label>Card Expiration</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCardNumber">
                                <Form.Label>Card number</Form.Label>
                                <Form.Control type="text" ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formCardCVV">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control type="text" ></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <br></br>

                    <button className='btn-submit-form' type='submit' onClick={ e => this.handleOrder(e) }>
					    Submit order!
				    </button>
                </Container>
                <Container> </Container>
               </body>

            </div>

        );
    }
}
export default Checkout;
