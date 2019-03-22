import { Component } from 'react'
import Link from 'next/link'
// import HamburgerNav from './HeaderNav'
import HeaderNav from './HeaderNav'

class Header extends Component {
  render () {
    return <header className='c-header'>
      <div className='o-main-container'>
        <div className='c-header__container'>
          <Link href='/'><a><img src='/static/images/yummypixels-logo.png' alt='Yummy Pixels Logo' className='c-header__brand-logo' /></a></Link>
          <HeaderNav />
        </div>
      </div>
    </header>
  }
}

export default Header
