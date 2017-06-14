import React from 'react'

import Title from '../components/title'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to="/">Home</Link>
      |
      <Link to="/about">About</Link>
    </div>
  )
}
