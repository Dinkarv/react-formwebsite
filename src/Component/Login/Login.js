import React from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';

//import PublicComp  from './PublicCompFunc';

function Login(props) {
 let textStyle = {
    textAlign: 'left'
}
  //console.log(props);
  return (
    <div>
      <Form className='loginForm'  style={{padding: '50px', borderRadius: '25px', border: '1px solid darkgrey'}}>
        <h1 className='font-weight-bold'>Login!</h1>
        <hr/>
        <FormGroup style={textStyle}>
          <Label className='text-bold'>UserName: </Label>
          <Input type='text'
            placeholder='UserName' onChange={props.change}
            name={props.stateOfComp}></Input>
        </FormGroup>
        <FormGroup style={textStyle}>
          <Label className='text-bold'>Password: </Label>
          <Input type='password' placeholder='Password'></Input>
        </FormGroup>
        <Button  color='info' className='btn-lg btn-block'>Login</Button>
      </Form>
    </div>
  )
}

export default Login; 