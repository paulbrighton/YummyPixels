import { Component } from 'react'
import Link from 'next/link'

class Travel extends Component {
  render () {
    return <section className='c-travel'>
      <div className='c-travel__container'>
        <h2 id='c-travel__header'>Travel Inspiration</h2>
        <div className='section__divider' />
        <figure className='c-travel__image'>
          <img src='/static/images/Japan_Korea 617.jpg' />
          <figcaption className='c-travel__image-text'><h4>Fushimi Inari Shrine</h4></figcaption>
        </figure>
      </div>
      <div className='c-travel__text'>
        <p>I have travelled through Africa and South East Asia for five months, lived in Brazil for a year and travelled through the Amazon for a month and now I take two to three-week trips as often as possible to the destinations I need to check off my list.</p>
        <p>I want to share with you some of my past and maybe future travel itineraries that should help you planning your next trip, be it a twelve-month gap year trip or that two week escape from normality.</p>
        <p>I’d like to start by sharing with you my trip to Japan and South Korea that I did in 2014, not only did I get to see Japan but also return to South Korea for some Korean BBQ and checkout some of the sites I missed the first time I visited. The trip includes Tokyo, Kyoto and Seoul along with other interesting places in Japan to visit, all in just over two weeks.</p>
        <p>Keep an eye on the Travel page as I will be updating it regularly with more travel inspiration.</p>
      </div>
    </section>
  }
}

export default Travel
