import React, { Component } from 'react'
import Login from "./Login";
import Register from "./Register";
import { Container, Button, Row, Col } from 'reactstrap';

export class Login_SignUp extends Component {

    constructor() {
        super();
        this.state = {
            isLoginOpen: false,
            isRegisterOpen: true
        }
    }

    clickHandler(e) {
        console.log('in button 1', e.target.id);
        this.setState({
            buttonSelected: e.target.id
        });
        e.preventDefault();
    }

    showRegisterBox(){
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        })
    }

    showLoginBox(){
        this.setState({
            isRegisterOpen: false,
            isLoginOpen: true
        })
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Row>
                        <br/>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Row >
                                <Col xs="6" style={{ textAlign: "right" }}>
                                    <Button size='lg' onClick={this.showLoginBox.bind(this)} id='login'>Login</Button>
                                </Col>
                                <Col xs="6" style={{ textAlign: "left" }}>
                                    <Button size='lg' onClick={this.showRegisterBox.bind(this)} id='signup'>Register</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "center" }}>
                            {this.state.isLoginOpen && <Login/>}
                            {this.state.isRegisterOpen && <Register/>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login_SignUp
