import { Component } from 'react'

import Link from 'next/link'

class TravelItineraries extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Travel Itineraries</h1>


      {/* CLASSNAMES NEED SORTING */}

      
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/travel_itinerary'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/Japan_Korea 617.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Japan/South Korea</figcaption>
            <p className='c-recipes__recipe-card__text'>Northern Thai pork curry with green pepper corns and snake beans.</p>
          </div>
        </Link>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/Japan_Korea 617.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Philippines</figcaption>
          <p className='c-recipes__recipe-card__text'>Taiwanese minced pork cooked in a soy with steamed rice and egg.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/Japan_Korea 617.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Myanmar</figcaption>
          <p className='c-recipes__recipe-card__text'>Tofu and minced pork cooked with chilli bean paste and Szechuan peppercorns.</p>
        </div>
      </div>
    </section>
  }
}

export default TravelItineraries
