import React from 'react'
import { Link } from "react-router-dom"
import "./Error.css"

const Error = () => {
  return (
      <div className='error'>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <Link className='error-btn' to="/">Go Home</Link>
      </div>
  )
}

export default Error