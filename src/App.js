import React, { Component } from 'react';


import Header from './components/Header/Header'
import routes from './routes'

import './App.css';
import './fonts.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
