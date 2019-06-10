import { Component } from 'react'

import Link from 'next/link'

class TravelItineraries extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Travel Itineraries</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/japan_itinerary'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/japan/matsumoto.jpg' />
              <figcaption className='c-recipe-card__title'>Japan &amp; South Korea</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Visiting Tokyo, Kyoto, Matsumoto, Takayama, Nara and Seoul.</p>
          </div>
        </Link>
        <Link href='/china_itinerary'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/china/great_wall.jpg' />
              <figcaption className='c-recipe-card__title'>China &amp; Hong Kong</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Destinations include Beijing, Datong, Pingyao, Chengdu, Yangshuo and Hong Kong.</p>
          </div>
        </Link>
        <Link href='/burma_itinerary'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/burma/inle_lake_boat.jpg' />
              <figcaption className='c-recipes__recipe-card__title'>Myanmar (Burma)</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Yangon, Mandalay, Bagan and Inle Lake overland by bus in 14 days.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default TravelItineraries
