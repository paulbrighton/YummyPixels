import { Component } from 'react'
import Link from 'next/link'

class Travel extends Component {
  render () {
    return <section className='c-travel'>
      <div className='c-travel__container'>
        <h2>Travel Inspiration</h2>
        <div className='section__divider' />
        <figure className='c-travel__image'>
          <img src='/static/images/Japan_Korea 617.jpg' />
          <figcaption className='c-travel__image-text'><h4>Fushimi Inari Shrine</h4></figcaption>
        </figure>  
      </div>
      <div className='c-travel__text'>
        <p>YummyPixels was born when Food Photographer Paul Brighton and his wife and food stylist, Thais, realised that their photo shoot sessions conveyed their love for the food they tasted during their travels around the world.</p>
        <p>This website is result of testing recipes, cooking, styling and photographing the food that they discovered and learned to enjoy daily.</p>
        <p>The world’s diversity can easily be verified by the way each ethnic group cooks, as this is a long lasting identifier of their culture.</p>
      </div>
    </section>
  }
}

export default Travel
