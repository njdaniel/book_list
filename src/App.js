import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux</h2>
        </div>
        <p className="App-intro">
          Creating an app with redux
        </p>
        <BookList/>
      </div>
    );
  }
}

export default App;
