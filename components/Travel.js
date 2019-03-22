import { Component } from 'react'
import Link from 'next/link'

class Travel extends Component {
  render () {
    return <div className='c-travel'>
      <section className='c-travel__container'>
        <div className='c-travel__image'>
          <figure className='c-travel__figure'>
            <Link href='/'><a><img className='c-travel__image--link' src='/static/images/Japan_Korea 617.jpg' alt='Image' /></a></Link>
            <figcaption className='c-travel__figure-text'>Fushimi Inari Shrine</figcaption>
          </figure>
        </div>
      </section>
    </div>
  }
}

export default Travel
