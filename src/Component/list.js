import React from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import PropTypes from 'prop-types';

function Block(props) {

  console.log(props);
  return (
    <div>
      <Form className='loginForm'>
        <h1 className='font-weight-bold'>Welcome to myWebsite!</h1>
        <FormGroup>
          <Label className='text-bold'>Email: </Label>
          <Input type='text'
            placeholder='Email' onChange={props.change}
            name={props.stateOfComp}></Input>
        </FormGroup>
        <FormGroup>
          <Label className='text-bold'>Password: </Label>
          <Input type='password' placeholder='Password'></Input>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block'>Login</Button>
        <br />
        <span>or continue with social account</span>
        <FacebookLoginButton className='mt-3 mb-3'>Login with Facebook!</FacebookLoginButton>
      </Form>
    </div>
  )
}

export default Block; 