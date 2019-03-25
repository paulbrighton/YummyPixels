import { Component } from 'react'
import Link from 'next/link'

class Travel extends Component {
  render () {
    return <div className='c-travel'>
      {/* <section className='c-travel__container'>
        <div className='c-travel__image'>
          <figure className='c-travel__figure'>
            <Link href='/'><a><img className='c-travel__image--link' src='/static/images/Japan_Korea 617.jpg' alt='Image' /></a></Link>
            <div class='c-image__slider--text'><h4>Centered</h4></div>
            <figcaption className='c-travel__figure-text'>Fushimi Inari Shrine</figcaption>
          </figure>
        </div> */}
      
      <div className='c-travel__image'>
        <figure>
          <img src='/static/images/Japan_Korea 617.jpg' />
        </figure>
        <div className='c-image__slider--text'><h4>Fushimi Inari Shrine</h4></div>
      </div>
      <div className='c-about__text'>
        <p>YummyPixels was born when Food Photographer Paul Brighton and his wife and food stylist, Thais, realised that their photo shoot sessions conveyed their love for the food they tasted during their travels around the world.</p>
        <p>This website is result of testing recipes, cooking, styling and photographing the food that they discovered and learned to enjoy daily.</p>
        <p>The world’s diversity can easily be verified by the way each ethnic group cooks, as this is a long lasting identifier of their culture.</p>
      </div>
      {/* </section> */}
    </div>
  }
}

export default Travel
