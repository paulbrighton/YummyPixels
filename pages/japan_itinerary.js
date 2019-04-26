import { Component } from 'react'

import Layout from '../components/Layout'

class JapanItinerary extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-itinerary'>
          <div className='c-itinerary__container'>
            <section className='c-itinerary__header'>
              <div className='c-itinerary__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/japan/japan_gate.jpg' />
                    <img src='static/Images/japan/japan_gate_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <h1>Japan &amp; South Korea in 16 Days</h1>
              <p className='c-itinerary__description-text'>Visiting Tokyo, Kyoto, Seoul, Matsumoto, Takayama and Nara.</p>
              <div className='c-itinerary__info'>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/calendar.svg' alt='Alarm clock' /></figure>
                  <p>Duration: 15 Days</p>
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

            <section className='c-itinerary__main'>
              <div className='c-itinerary__main--intro'>
                <p>So, I had always wanted to visit Japan but whenever I had checked the prices in the past, it always seemed far too expensive. From £800 flights to £80 a night hotel rooms, I thought it was one of those places you need to save for a special occasion and far too expensive for a solo traveller.</p>
                <p>Then, in 2014, I was checking some flights and found return flights to Tokyo for just over £500, I then checked the hotels and found that good business hotels can be sought for around £50 a night and as now travelling as a couple with my wife, Thais, this was now seeming like a viable travel option.</p>
                <p>I booked the flights and 4 nights in Shinjuku, Tokyo in a business hotel, nothing special but did come with the famous Japanese toilet then we started looking into the places we wanted to visit. Although I had visited South Korea in 2002, Thais had never been, so we decided to tag on a short 3-day trip to Seoul. We also decided that we wanted to visit the Fuji Five Lakes, the Japanese Alps, Nara and Kyoto, wow, all this in 14 days, well keep reading and I’ll show you how we did it.</p>
              </div>
            </section>

            <section className='c-itinerary__main'>
              <div className='c-itinerary__main--day'>
                <h2>Day 1</h2>
                <p>So, we flew with Air France from Manchester and arrived in Tokyo around 6:00, got the subway to Shinjuku and a short taxi ride to the hotel. It turned out we were far too early to check in, so we dropped the bag in the hotel and decided to go and explore Shinjuku for a couple of hours. We finally got our room at around 11:30 and managed to get a couple of hours sleep so we could go checkout one of the most fascinating places in the world, especially at night.</p>
                <p>We managed to get tickets for the Robot Restaurant, where better to get into the Japanese craziness. It’s one of the most out there shows you’ll ever see and also comes with food; we went for the Grilled Beef Dinner Box.</p>
                <figure className='c-itinerary__main--image'>
                  <div className='iframe__container'>
                    <iframe width='800' height='450' src='https://www.youtube-nocookie.com/embed/MuG6F8896qw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
                  </div>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 2</h2>
                <p>No trip to Japan would be complete without getting as close to Mount Fuji as possible so we headed by bus to Kawaguchi and then hired a car for the day so we could visit the Five Lakes that are situated around Fuji. We did ask for an English satnav but after trying it out, it only wanted to speak in Chinese, luckily, it’s not hard to navigate around the Five Lakes so it was a stress free and amazing day seeing Fuji from many different angles.</p>
                <figure className='c-itinerary__main--video'>
                  <div className='iframe__container'>
                    <iframe src='https://giphy.com/embed/fik5xIo45Nb2zjFqvF' width='800' height='450' frameBorder='0' />
                  </div>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 3</h2>
                <p>A free day to checkout Tokyo using the Metro system, we managed to see Harajuku where the young Japanese like to hang out with all their funky and weird dressing styles and we also went to nearby Yoyogi Park and got a glimpse of a Shinto Wedding in Meiji Jingu Shrine. We then headed to the famous crossing in Shibuya and went to eat some food, today it was Tonkatsu on the menu.</p>
                <p>That night, we decided to explore the hotel neighbourhood for some street photography and got to meet some cool Japanese guy (Keita) that decided to have a few beers with us and tell us all about Japan’s love for beer! This was a long night…</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/meiji_jingu.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 4</h2>
                <p>Thanks to a typhoon, our plans to go to Nikko didn’t go ahead, we had to spend another day in and around the hotel in Shinjuku. We found a nice Indian restaurant for lunch and by night we visited the tallest building in the area – the Tokyo Metropolitan Government Building (free admission) - for a view of the Tokyo skyline.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/metro_building_tokyo.jpg' />
                  <figcaption>Photo by Charles Postiaux on Unsplash</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 5</h2>
                <p>Checked out of hotel and headed to the airport for our flight to Seoul, South Korea. After landing in Seoul, we headed to Hongdae by the Airport Railroad Express (AREX) where we had booked an Airbnb. After checking in and experiencing the underfloor heating, we shared a bottle of Soju and headed out for some of the famous Korean BBQ with all the trimmings and more Soju, yummy.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/soju.jpg' />
                  <figcaption>Photo by Eiliv-Sonas Aceron on Unsplash</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 6</h2>
                <p>On our first full day in Seoul, we visited the Gyeongbokgung Palace for the change of guards ceremony, and from there we decided to visit the nearby National Palace Museum of Korea and strolled through Bukchon Hanok Village and Insadong.</p>
                <p>After a long day, we found a Korean Fried Chicken restaurant to recharge the batteries then hit the bars for more Soju and had our first ever game of Beer Pong.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/seoul_palace.jpg' />
                  <figcaption>Photo by Eiliv-Sonas Aceron on Unsplash</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 7</h2>
                <p>On day two in Seoul, we decided to see the city using the Seoul Metro System, it’s cheap and covers most of the main sites. We managed to cram in Changdeokgung Palace and Huwon with its astonishing gardens, Gwangjang Market and Myeongdong for some mandu (Korean dumplings).</p>
                <p>We then finished the day at a Bulgogi restaurant for more tasty food and Soju.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/korean_market.jpg' />
                  <figcaption>Image by tragrpx from Pixabay</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 8</h2>
                <p>We flew back to Tokyo, picked up our Japanese Rail Pass (cost: £155 for a week) and headed for Matsumoto in the Japanese Alps where we stayed in a traditional Ryokan (Inn) with futon beds and the most advanced toilet I’ve ever seen.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/ryokan.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 9</h2>
                <p>We picked up the hire car then went to visit Matsumoto Castle before we set off to Takayama. We stopped at Kamikochi at the Chubu Sangaku National Park for some mild hiking and to enjoy the mountain scenery. We arrived in Takayama around 18:00 only to find that all restaurants close at 17:00 so it was 7 Eleven for supper.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/matsumoto.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 10</h2>
                <p>We strolled through Sanmachi Suji historic district visiting sake merchants and stopping for some green tea ice-cream. After having Hida beef for lunch, we headed to Hida Minzoka Mura Folk Village (Hida no Sato).</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/hida.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 11</h2>
                <p>We drove back to Matsumoto avoiding the toll road to stop at viewing points in the winding part of the road on route 158 to enjoy koyo – the autumn foliage. We dropped the car off and headed to Kyoto by Shinkansen (Bullet Train). When we arrived in Kyoto, we checked in to Guesthouse Ga-Jyun, as it’s not cheap in Kyoto, we opted for a room with bunk beds but still a private bathroom at a cost of £50 a night.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/shinkansen.jpg' />
                  <figcaption>Image by tikisada from Pixabay</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 12</h2>
                <p>Day trip to Nara by train, got to see the friendly deer that are all over the city and in Nara Park. We also did some sightseeing of the historical temples such as Kofukuji and its five storey pagoda, and the amazing Tōdai-ji temple and the Daibutsuden.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/nara_temple.jpg' />
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 13</h2>
                <p>Full day getting to know Kyoto, we started the day by heading to Kiyomizu-dera Temple via Higashiyama District where we bought some pottery and snacks.</p>
                <p>From there we headed to Higashiyama Jisho-ji (the Silver Pavillion) and then walked back to our guest house which was located near the Heian Shrine while stopping at the nearby temples. We visited Hōnen-in Temple, Anrakuji Temple and walked the Philosoper’s path heading to Kōunji Temple,  Kumano Nyakuōji Shrine and Eikando Temple. You have to love Kyoto.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/kyoto.jpg' />
                  <figcaption>Image by Michelle Maria from Pixabay</figcaption>
                </figure>
              </div>
              <div className='c-itinerary__main-day'>
                <h2>Day 14</h2>
                <p>Checked out of guesthouse at 11:00 but left the backpack while we went to explore Kyoto for one last time. We managed to see the Kyoto Jidai Matsuri festival that was paraded through the streets and ended at the Heian Shrine where we enjoyed a stroll in the garden before we headed for the train station to get the Shinkansen to Narita, Tokyo. On arrival to the airport hotel, we threw our bags in the room and headed for the Chinese restaurant for Noodles and Mapo Tofu before heading to bed.</p>
                <p>On arrival to the airport hotel, we threw our bags in the room and headed for the Chinese restaurant for Noodles and Mapo Tofu before heading to bed as we had an early flight home in the morning.</p>
                <figure className='c-itinerary__main--image'>
                  <img src='/static/Images/japan/chinese_food.jpg' />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default JapanItinerary
