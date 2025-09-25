import React from 'react'

function Header() {
  return (
    <header className="header-container">
        <img src={new URL('../assets/Chef-icon.png', import.meta.url).href} alt="Chef logo" className='chef-logo'/>
        <h1>Claude Chef</h1>
    </header>
  )
}

export default Header