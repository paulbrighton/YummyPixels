import { Component } from 'react'

import Link from 'next/link'

class MainNav extends Component {
  render () {
    return <div>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/recipes'><a>Recipes</a></Link></li>
      <li><Link href='/travel'><a>Travel</a></Link></li>
      <li><Link href='/gallery'><a>Gallery</a></Link></li>
    </div>
  }
}

export default MainNav
