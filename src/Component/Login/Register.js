import React from 'react'
import { Button, Form, Label, FormGroup, Input, InputGroupAddon, InputGroupText,InputGroup } from 'reactstrap';

export default function Register(props) {
    return (
        <div>
            <Form className='loginForm'>
                <h1 className='font-weight-bold'>Register!</h1>
                <hr />
                <FormGroup>
                    <Label>UserName: </Label>
                    <Input type='text'
                        placeholder='UserName' onChange={props.change}
                        name={props.stateOfComp}></Input>
                </FormGroup>
                <FormGroup>
                    <Label className='text-bold'>Email: </Label>
                    <Input type='text'
                        placeholder='Email' onChange={props.change}
                        name={props.stateOfComp}>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>@example.com</InputGroupText>
                        </InputGroupAddon>
                    </Input>
                </FormGroup>
                <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
                <FormGroup>
                    <Label className='text-bold'>Password: </Label>
                    <Input type='password' placeholder='Password'></Input>
                </FormGroup>
                <Button  color='info' className='btn-lg btn-block'>Register</Button>
            </Form>
        </div>
    )
}
