import { Component } from 'react'

import Link from 'next/link'

class HamburgerNav extends Component {
  render () {
    const { click } = this.props

    return <div>
      <li><Link href='/'><a onClick={click}>Home</a></Link></li>
      <li><Link href='/about'><a onClick={click}>Recipes</a></Link></li>
      <li><Link href='/travel'><a onClick={click}>Travel</a></Link></li>
      <li><Link href='/stock_photography'><a onClick={click}>Gallery</a></Link></li>
    </div>
  }
}

export default HamburgerNav
