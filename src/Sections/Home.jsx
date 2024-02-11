import React from 'react'
import Profile from '../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'

function Home() {
  return (
    <>
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Abhishek Raveendran </span >ME(A)RN Stack Developer</h1>

          <p className='home__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eaque sint consequuntur et quas, deleniti corporis ea ipsum magnam dolorum explicabo rerum esse excepturi quos ipsam dolore porro debitis vel.
          </p>

          <Link to='/about' className='button'>
            More About Me{''}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>

    </section>
    </>
  )
}

export default Home