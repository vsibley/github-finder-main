import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Home from './Home'

function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            Oops!
          </h1>
          <p className='mb-8 text-5xl'>404 Page not found!</p>
          <Link className='btn btn-primary' to='/'>
            <FaHome className='mr-2' /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound