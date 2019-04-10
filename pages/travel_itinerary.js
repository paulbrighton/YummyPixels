import { Component } from 'react'

import Layout from '../components/Layout'

class MuttonChaap extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-itinerary'>
          <div className='c-itinerary__container'>
            <section className='c-itinerary__header'>
              <div className='c-itinerary__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/jungle_curry_hero_mobile.jpg' />
                    <img src='static/Images/jungle_curry_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <h1>Japan &amp; South Korea in 16 Days</h1>
              <p className='c-itinerary__description-text'>Visiting Tokyo, Kyoto, Seoul, Matsumoto, Takayama and Nara.</p>
              <div className='c-itinerary__info'>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/calendar.svg' alt='Alarm clock' /></figure>
                  <p>Duration: 16 Days</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/budget.svg' alt='Animated hand carrying food' /></figure>
                  <p>Cost: £3000 for 2</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>

            <section className='c-itinerary__intro'>
              <p>So, I had always wanted to visit Japan but whenever I had checked the prices in the past, it always seemed far too expensive. From £800 flights to £80 a night hotel rooms, I thought it was one of those places you need to save for a special occasion and far too expensive for a solo traveller.</p>
              <p>Then, in 2014, I was checking some flights and found return flights to Tokyo for just over £500, I then checked the hotels and found that good business hotels can be sought for around £50 a night and as now travelling as a couple with my wife, Thais, this was now seeming like a viable travel option.</p>
              <p>I booked the flights and 4 nights in Shinjuku, Tokyo in a business hotel, nothing special but did come with the famous Japanese toilet then we started looking into the places we wanted to visit. Although I had visited South Korea in 2002, Thais had never been, so we decided to tag on a short 3-day trip to Seoul. We also decided that we wanted to visit the Fuji Five Lakes, the Japanese Alps, Nara and Kyoto, wow, all this in 14 days, well keep reading and I’ll show you how we did it.</p>
            </section>

            <section className='c-itinerary__main'>
              <div className='c-itinerary__main-day'>
                <h2>Day 1</h2>
                <p>We flew with Air France from Manchester to Tokyo stopping a Paris for a few hours to change planes. Good tip if you like Indian food, tell your airline that your food preference is a Hindu meal, then you get to eat curry on your long flights instead of the usual airline food.</p>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 2</h2>
                <p>Arrived in Tokyo around 6:00, got the subway to Shinjuku and a short taxi to the hotel. It turned out we were far too early to check in, so we dropped the bag and decided to go and explore Shinjuku for a couple of hours. We finally got our room at around 11:30 and managed to get a couple of hours sleep so we could go checkout one of the most fascinating places in the world, especially at night.</p>
                <figure className='c-recipes__recipe-card__image'>
                  <img src='/static/Images/Japan_Korea 617.jpg' />
                </figure>
                <p>We managed to get tickets for the Robot Restaurant, where better to get into the Japanese craziness. It’s one of the most out there shows you’ll ever see and also comes with food; we went for the Grilled Beef Dinner Box.</p>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 3</h2>
                <p>Arrived in Tokyo around 6:00, got the subway to Shinjuku and a short taxi to the hotel. It turned out we were far too early to check in, so we dropped the bag and decided to go and explore Shinjuku for a couple of hours. We finally got our room at around 11:30 and managed to get a couple of hours sleep so we could go checkout one of the most fascinating places in the world, especially at night.</p>
                <figure className='c-recipes__recipe-card__image'>
                  <img src='/static/Images/Japan_Korea 617.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 6</h2>
                <p>Checked out of hotel and headed to the airport for our flight to Seoul, South Korea. After landing in Seoul, we headed to Hongdae by the Airport Railroad Express (AREX) where we had booked an Airbnb. After checking in, we shared a bottle of Soju and headed out for some of the famous Korean BBQ with all the trimmings and more Soju, yummy.</p>
                <figure className='c-recipes__recipe-card__image'>
                  <img src='/static/Images/Japan_Korea 617.jpg' />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default MuttonChaap

