import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class BurmaItinerary extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Myanmar (Burma) 14 day travel itinerary by Yummy Pixels</title>
        <meta
          name='description'
          content='A travel itinerary for Myanmar (Burma) that shows you how to see Yangon, Mandalay, Bagan and Inle Lake overland by bus in 14 days.'
          key='viewport'
        />
      </Head>
      <main className=''>
        <div className='c-itinerary'>
          <div className='c-itinerary__container'>
            <section className='c-itinerary__header'>
              <h1>Myanmar (Burma) in 14 Days</h1>
              <div className='c-itinerary__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/burma/inle_lake_boat.jpg' />
                    <img src='static/Images/burma/inle_lake_boat_hero.jpg' alt='Chinese style gate in front of a temple' />
                  </picture>
                </figure>
                <figcaption>Photo by rmac8oppo at Pixabay.com</figcaption>
              </div>
              <div className='c-itinerary__description-text'>
                <p>Yangon, Mandalay, Bagan and Inle Lake overland by bus in 14 days.</p>
              </div>

              <div className='c-itinerary__info'>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/calendar.svg' alt='Animated calendar' /></figure>
                  <p>Duration: 14 Days</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/budget.svg' alt='Animated paper and calculator' /></figure>
                  <p>Cost: £2500 for 2</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>

            <section className='c-itinerary__main'>
              <div className='c-itinerary__main--intro'>
                <p>Myanmar was never an easy place to visit due to restrictions on tourists, I remember visiting Chang Mai in 2001 and wanting to visit for a few days but I never got the chance due to lack of time and ever since I had wanted to go. </p>
                <p>With its temples, old and new that can rival those in Cambodia and Thailand and its cuisine, a mixture of South and South-East Asian food, I knew it would be a place that I’d love to be.</p>
                <p>We planned on visiting Yangon, Mandalay, Bagan and Inle Lake. Not too many places to visit on this trip but it did include a few night buses to save some time.</p>
              </div>
            </section>
          </div>
          <section className='c-itinerary__main'>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 1</h2>
                  <p>We flew with Emirates from Manchester stopping in Dubai and Bangkok and arrived in Yangon at 22:00. Our hotel for the next four days would be the Best Western in Chinatown, not that cheap (£50 a night) but we had read that the standards in Myanmar were not that good so decided to treat ourselves. </p>
                  <p>Location was good with nice bars and restaurants within walking distance. It was late so we decided to crack open the duty free and try get a good night’s sleep ready to explore Yangon in the morning.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/yangon-at-night.jpg' alt='Yangon temple at night' />
                    <figcaption>Photo by Eiliv-Sonas Aceron on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 2</h2>
                  <p>After going to find a bank to change some money we had leisurely day to wonder around Downtown Yangon to checkout the old colonial heritage buildings and go to see our first temple, Sule Paya.</p>
                  <p>At night, we went to have a look at the night market down by the ferry terminal then hit China town for some tasty food and cold beer.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/sule_paya_temple.jpg' alt='Night view of a road in Yangon' />
                    <figcaption>Photo by Harish Shivaraman on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 3</h2>
                  <p>We wanted to see as much of Yangon as possible so decided to hire a car and driver for the day. First, we went to Nga Htat Gyi Pagoda and Chauk Htat Kyi Pagoda before going to a famous restaurant called Feel for some traditional Burmese food.</p>
                  <p>We then headed for Shwedagon Pagoda just before it got dark to see it all its glory before going for Burmese Noodles at Myanmar Secret restaurant.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/reclining_buddha_yangon.jpg' alt='Head of reclining buddha in Yangon' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 4</h2>
                  <p>Another half day to explore Yangon, we wanted to go on the local train that circles Yangon, after spending about an hour trying to find the ticket office, we bought the tickets and got the next train.</p>
                  <p>We had heard it was a nice scenic route but the train we managed to get had limited windows and was really hot, so we only went one stop and got off. We decided to get a taxi to Kandawgyi Park and had lunch at the Garden Bistro then went to a local beer station before going to get our night bus to Bagan.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/yangon_train.jpg' alt='A train in a station in Yangon' />
                    <figcaption>Photo by rmac8oppo at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 5</h2>
                  <p>We arrived in Bagan (Nyaung-U) at 6:00 and got a taxi to our hotel, the <a href='http://www.zfreetihotel.com/' target='blank'>Zfreeti Hotel</a>, no room was ready, so we went to explore the local area.</p>
                  <p>After checking into the hotel, we had some downtime before going out for some drinks and food. We ended up in a nice little bar called Bagan Zay for beer, cocktails and some grilled meats. </p>
                  <p>On the way back to the hotel, we managed to book a horse and cart for the following day to go visit the temples Bagan.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/bagan.jpg' alt='Temples of Bagan, Myanmar' />
                    <figcaption>Photo by Eiliv-Sonas Aceron on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 6</h2>
                  <p>Full day with a 4:30 start time to see the temples of Bagan, we saw the sunrise at Bulethi temple and sunset at Shwesandaw temple. </p>
                  <p>In between, we managed to see  Shwezigon Pagoda, Thatbyinnyu Temple, Ananda Temple, Dhammayangyi Temple, Htilominlo Temple and Sulamani Temple.</p>
                  <p>We were also lucky to catch a parade of young monks, locals, elephants and cow/horse and carts that were heading for Shwezigon Pagoda.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/bagan-festival.jpg' alt='Colourful cow and cart in a festival in Bagan' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 7</h2>
                  <p>We had a relaxing day in Nyaung-U and found a bar called Weather Spoons so decided we had to go there for lunch, it’s hard to find bad food in Myanmar, it seems.</p>
                  <p>At 15:00, we got picked up from the hotel to go on a sunset river cruise on the Irrawaddy River with cocktails and a buffet meal.</p>
                  <p>It was really nice sailing down the river with views of local villages and ancient temples.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/irrawaddy_river.jpg' alt='Food market in Seoul' />
                    <figcaption>Photo by Dinis Bazgutdinov on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 8</h2>
                  <p>We checked out of the hotel and went for one last wonder around Nyaung-U and we found even more small temples that we had missed and ran into our taxi from our tour of the temples.</p>
                  <p>At 16:00, the mini bus we had booked picked us up for the 6-hour drive to Mandalay. We arrived at our hotel, Royal City Hotel at around 22:00 and went straight to bed as we had a full day planned in the morning.</p>
                  <p>It is possible to get a cruise boat from Bagan to Mandalay but we went for this option to save some time.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/bagan_transport.jpg' alt='Traditional Japanese bedroom' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 9</h2>
                  <p>A full day sightseeing in Mandalay. We started the day by visiting Mahamuni Pagoda with the gold leaf buddha then headed for Mandalay Palace, Shwenandaw Monastery and the Kuthodaw Pagoda that has the worlds largest book inscribed on stone tablets.</p>
                  <p>We then went to Sutaungpyei Pagoda, on top of Mandalay Hill for view of city at sunset, we were lucky to find the monks chanting as the sun went down over the city. </p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/mandalay_temple.jpg' alt='Stupas at temple in Mandalay' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 10</h2>
                  <p>Down time in Mandalay today, we got a rickshaw taxi to the local cinema complex but there was not a lot worth watching.</p>
                  <p>Luckily, we found a beer station close by so went for some food and beer then headed back to the hotel to chill out on the rooftop until we had to leave to get the night bus to Inle Lake.</p>
                  <p>Our bus departed at 22:00 and we used the same bus company for all our trips while in Myanmar, it was JJ Express (Joyous Journey Express) and the buses are really comfortable with large reclining seats.</p>
                  <p>On arrival to Nyaungshwe, Inle Lake, we had a short taxi ride from the bus station to our hotel, Mingalar Inn.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/mandalay_bike_taxi.jpg' alt='Rickshaw taxi with driver in Mandalay' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 11</h2>
                  <p>Lazy day in Nyaungshwe as we arrived at 4:30 and didn’t get too much sleep on the bus. We went for a wonder around the docks and managed to find a boat to head out on the lake the next day then went for a dim sum lunch at Live Dim Sum House.</p>
                  <p>At night, we went to try some of the local food, curry and rice and local sweet peanut toffee at a restaurant called Htoo Htoo Aung, delicious.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/gallery/inle-lake.jpg' alt='Temple in middle of Inle Lake, Myanmar' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 12</h2>
                  <p>Full day boat trip on Inle Lake, we went to Phaung Daw Oo Pagoda, a local market (markets are at different places around the lake on different days), Nga Hpe Kyaung (Jumping Cat Monastery), saw the women weaving with lotus stems to make cloth and even saw some of the local women wearing neck rings.</p>
                  <p>As there is loads of Indian restaurant in Nyaungshwe, we decided to go for a mutton vindaloo and butter chicken dinner, you can never eat too much curry!</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/inle_lake_temple.jpg' alt='Phaung Daw Oo Pagoda, Inle Lake, Myanmar' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 13</h2>
                  <p>Not too much to do today, our hotel had a pool, so we hung out there for a bit then went to the local market to pick up items to take home (preserved tea leaves for salad and a cookbook).</p>
                  <p>To kill some time before our night bus at 18:30, we found a Mexican restaurant called Chillax Bistro to relax in and have some beer and tacos.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/fisherman_inle_lake.jpg' alt='Fisherman in boat on Inle Lake, Myanmar' />
                    <figcaption>Image by Myriams-Fotos from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 14</h2>
                  <p>We arrived back in Yangon at 6:00 and got a taxi to our hotel, Pandora Motel. After having a rest, we went for one last look around the local area checking out the local markets and restaurants.</p>
                  <p>After some food, we went back to the hotel to watch a movie or two and a few glasses of wine before we got a taxi to the airport to fly home.</p>
                  <p>I know Myanmar has had its problems lately, but it is truly a fascinating place to visit and should be on every travellers wish list.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/burma/yangon_street_market.jpg' alt='Vegetable stalls on street of Yangon, Myanmar' />
                    <figcaption>Image by Skybluesrich at pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  }
}

export default BurmaItinerary
