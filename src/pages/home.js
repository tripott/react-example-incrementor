import React from 'react'

import Nav from '../containers/nav'
import Incrementor from '../components/incrementor'

const Home = props => {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <div>
        <Incrementor initialValue={100} incrementor={1} decrementor={1} />
      </div>
    </div>
  )
}

export default Home
