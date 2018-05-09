import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Portal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('portal')
    );
  }
}


export default class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicks : 0
    }

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(){
    this.setState({clicks: this.state.clicks + 1})
  }



  render(){
    return(
      <div>
        This is the root element.  Clicks are {this.state.clicks}
        <Portal>
          <div className="portal-button">
            <button onClick={(e)=>this.handleClick()}>Click</button>
          </div>
        </Portal>
      </div>
    )
  }
}











/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

