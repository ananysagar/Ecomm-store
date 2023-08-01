import React, { useEffect, useState } from 'react'
import brandLogo from '../images/brand-logo.png'
import '../components/Header.css'


function Header() {
  const [scrolled,setscrolled] = useState(false);

    const changeNavStyle = () => {
      window.scrollY>=100 ? setscrolled(true) : setscrolled(false);
    }

    useEffect(() => {
      window.addEventListener('scroll',changeNavStyle);
      return() => {
        window.removeEventListener('scroll',changeNavStyle)
      }
    }, [])
    

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className='navbar'>
            <div className='brand-logo'>
                <a href="/"><img src={brandLogo} alt='brand-logo' className='nav-logo'/></a>
            </div>
            <div className='navbar-menu'>
                <a href="/categories">Categories</a>
                <a href='/www.google.com'>Product Page</a>
                <a href='/www.google.com'><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default Header