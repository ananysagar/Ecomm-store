import React from 'react'
import '../components/Newsletter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <div className='newsletter-container'>
            <div className='newsletter-card'>
                <p>Newsletter</p>
                <form className='newsletter-form'>
                    <input type='email' placeholder='youremail@email.com'/>
                    <button className='Subscribe-btn'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter