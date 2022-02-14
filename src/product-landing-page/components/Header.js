import React from 'react'

function Header() {
  return (
    <header id="header" className="landing-page__header">

    <div className="img-container">
        <img src="https://leddfoot.github.io/imageServer/vpblogo.jpg" id="header-img" className='header-img' alt='crappy fake logo with a skull and viking hat'/>
    </div>
    <nav id="nav-bar" className="link-container">
        <a className="nav-link" href="#our-philosophy">Our Philosophy</a>
        <a className="nav-link" href="#who-we-are">Who we are</a>
        <a className="nav-link" href="#our-fermenting-secrets">Our fermenting secrets</a>
        <a className="nav-link" href="#contact-us">Contact us</a>

    </nav>
    <div className="clear"></div>
</header>
  )
}

export default Header