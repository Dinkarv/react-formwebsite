import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import Block from './Component/list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mail: '',
      pass: ''
    };
  }

  changeHandle = (e) => {
    if(e.target.value){
      this.setState({
        mail: e.target.value
      })
    }
    console.log('e', this.state);
  }

  render() {
    return (
      <div>
        <Block change={this.changeHandle}
              stateOfComp = {this.state.mail}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
