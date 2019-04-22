import { Component } from 'react'

import Link from 'next/link'

class FooterNav extends Component {
  render () {
    return <div className='c-footer__nav'>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/recipes'><a>Recipes</a></Link></li>
        <li><Link href='/travel'><a>Travel</a></Link></li>
        <li><Link href='stock_photography'><a>Gallery</a></Link></li>
      </ul>
    </div>
  }
}

export default FooterNav
