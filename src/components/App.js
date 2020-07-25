import React, { Component } from 'react'

import './App.css'
import Light from '../components/Light'
import Header from '../components/Header'

class App extends Component {
  
  render() {

    return (
      <>
        <Header />
        <div className='light-container'>
          <Light />
          <Light />
          <Light />
          <Light />
        </div>
      </>
    )
  }
}

export default App