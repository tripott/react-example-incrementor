import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="pa4">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
