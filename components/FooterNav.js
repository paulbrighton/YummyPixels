import { Component } from 'react'

import Link from 'next/link'

class FooterNav extends Component {
  render () {
    return <div className='c-footer__nav'>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/about'><a>Recipes</a></Link></li>
        <li><Link href='/portfolio'><a>Travel</a></Link></li>
        <li><Link href='/contact'><a>Gallery</a></Link></li>
      </ul>
    </div>
  }
}

export default FooterNav
