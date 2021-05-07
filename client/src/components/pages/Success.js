import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css';
import {Alert, Container} from 'react-bootstrap';

class Success extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Alert variant="success">
                        Congrats your order is submitted!
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default Success;