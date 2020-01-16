import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class JapanItinerary extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Japan and South Korea 16 day travel itinerary by Yummy Pixels</title>
        <meta
          name='description'
          content='A travel itinerary for Japan and South Korea that shows you how to see Tokyo, Kyoto, Seoul, Matsumoto, Takayama and Nara in 16 days.'
          key='viewport'
        />
      </Head>
      <main className=''>
        <div className='c-itinerary'>
          <div className='c-itinerary__container'>
            <section className='c-itinerary__header'>
              <h1>Japan &amp; South Korea in 16 Days</h1>
              <div className='c-itinerary__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/japan/japan_gate.jpg' />
                    <img src='static/Images/japan/japan_gate_hero.jpg' alt='Chinese style gate in front of a temple' />
                  </picture>
                </figure>
              </div>
              <div className='c-itinerary__description-text'>
                <p>Visiting Tokyo, Kyoto, Seoul, Matsumoto, Takayama and Nara.</p>
              </div>
              <div className='c-itinerary__info'>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/calendar.svg' alt='Animated calendar' /></figure>
                  <p>Duration: 14 Days</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/budget.svg' alt='Animated paper and calculator' /></figure>
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
                <p>I booked the flights and 4 nights in Shinjuku, Tokyo, in a business hotel, nothing special but did come with the famous Japanese toilet then we started looking into the places we wanted to visit. Although I had visited South Korea in 2002, Thais had never been, so we decided to tag on a short 3-day trip to Seoul. We also decided that we wanted to visit the Fuji Five Lakes, the Japanese Alps, Nara and Kyoto, wow, all this in 14 days, well, keep reading and I’ll show you how we did it.</p>
              </div>
            </section>
          </div>
          <section className='c-itinerary__main'>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 1</h2>
                  <p>So, we flew with Air France from Manchester and arrived in Tokyo around 6:00, got the subway to Shinjuku and a short taxi ride to the hotel. It turned out we were far too early to check in, so we dropped the bag in the hotel and decided to go and explore Shinjuku for a couple of hours.</p>
                  <p>We managed to get tickets for the Robot Restaurant - where better to get into the Japanese craziness. It’s one of the most out there shows you’ll ever see and also comes with food&#59; we went for the Grilled Beef Dinner Box.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <div className='iframe__container'>
                      <iframe width='800' height='450' src='https://www.youtube-nocookie.com/embed/MuG6F8896qw' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 2</h2>
                  <p>No trip to Japan would be complete without getting as close to Mount Fuji as possible so we headed by bus to Kawaguchi and then hired a car for the day so we could visit the Five Lakes that are situated around Fuji.</p>
                  <p>We did ask for an English satnav but after trying it out, it only wanted to speak in Chinese. Luckily, it’s not hard to navigate around the Five Lakes so it was a stress free and amazing day seeing Fuji from many different angles.</p>

                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/mt-fuji.jpg' alt='Mount Fuji' />
                    <figcaption>Image by K2-Kaji from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 3</h2>
                  <p>A free day to checkout Tokyo using the Metro system. We managed to see Harajuku where the young Japanese like to hang out with all their funky and weird dressing styles and we also went to nearby Yoyogi Park and got a glimpse of a Shinto Wedding in Meiji Jingu Shrine.</p>
                  <p>We then headed to the famous crossing in Shibuya and went to eat some food, today it was Tonkatsu on the menu.</p>
                  <p>That night, we decided to explore the hotel neighbourhood for some street photography and got to meet some cool Japanese guy (Keita) that decided to have a few beers with us and tell us all about Japan’s love for beer! This was a long night…</p>
                  <p>Harajuku is situated between Shinjuku and Shibuya and is on the Yamanote Metro Line. It's also within walking distance of Yoyogi Park and the Meiji Jingu Shrine.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/meiji_jingu.jpg' alt='Shinto priests in a Tokyo shrine' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 4</h2>
                  <p>Thanks to a typhoon, our plans to go to Nikko didn’t go ahead. We had to spend another day in and around the hotel in Shinjuku.</p>
                  <p>We found a nice Indian restaurant for lunch and by night we visited the tallest building in the area – the Tokyo Metropolitan Government Building (free admission) - for a view of the Tokyo skyline.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/metro_building_tokyo.jpg' alt='Tokyo Metropolitan Government Building' />
                    <figcaption>Photo by Charles Postiaux on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 5</h2>
                  <p>Checked out of hotel and went to the airport for our flight to Seoul, South Korea. After landing in Seoul, we headed to Hongdae by the Airport Railroad Express (AREX) where we had booked an Airbnb.</p>
                  <p>After checking in and experiencing the underfloor heating, we shared a bottle of Soju and decided to go out for some of the famous Korean BBQ with all the trimmings and more Soju, yummy.</p>
                  <p>Hongdae is a good place to stay in Seoul, there are lots of bars and cheap places to eat as it's close to Hongik University.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/soju.jpg' alt='Bottle of Soju - Korean rice drink' />
                    <figcaption>Photo by Eiliv-Sonas Aceron on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 6</h2>
                  <p>On our first full day in Seoul, we visited the Gyeongbokgung Palace for the change of guards ceremony, and from there we decided to visit the nearby National Palace Museum of Korea and strolled through Bukchon Hanok Village and Insadong.</p>
                  <p>After a long day, we found a Korean Fried Chicken restaurant to recharge the batteries then hit the bars for more Soju and had our first ever game of Beer Pong.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/seoul_palace.jpg' alt='Gyeongbokgung Palace in Seoul' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 7</h2>
                  <p>On day two in Seoul, we decided to see the city using the Seoul Metro System - it’s cheap and covers most of the main sites.</p>
                  <p>We managed to cram in Changdeokgung Palace and Huwon with its astonishing gardens, Gwangjang Market and Myeongdong for some mandu (Korean dumplings).</p>
                  <p>We then finished the day at a Bulgogi restaurant for more tasty food and Soju.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/korean_market.jpg' alt='Food market in Seoul' />
                    <figcaption>Image by tragrpx from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 8</h2>
                  <p>We flew back to Tokyo, picked up our Japan Rail Pass (cost: £200 for a week) and headed for Matsumoto in the Japanese Alps where we stayed in a traditional Ryokan (Inn) with futon beds and the most advanced toilet I’ve ever seen.</p>
                  <p>The Japan Rail Pass is a good way to make travel by train cheaper, there are a few options but the one we got covered the whole of Japan and also lets you use the bullet trains.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/ryokan.jpg' alt='Traditional Japanese bedroom' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 9</h2>
                  <p>We picked up the hire car then went to visit Matsumoto Castle before we set off to Takayama. We stopped at Kamikochi at the Chubu Sangaku National Park for some mild hiking and to enjoy the mountain scenery. We arrived in Takayama around 18:00 only to find that all restaurants close at 17:00 so it was 7 Eleven for supper.</p>
                  <p>Matsumoto Castle is open from 8:30 till 17:00, entry costs &#165;610 and is really worth a visit.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/matsumoto.jpg' alt='Matsumoto Castle in Matsumoto, Japan' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 10</h2>
                  <p>We strolled through Sanmachi Suji historic district visiting sake merchants and stopping for some green tea ice-cream. After having Hida beef for lunch, we headed to Hida Minzoka Mura Folk Village (Hida no Sato).</p>
                  <p>Hida Folk Village is an open air museum displaying around thirty traditional houses from the Hida region, the mountainous area around Takayama.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/hida.jpg' alt='Hida Minzoka Mura Folk Village in Takayama, Japan' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 11</h2>
                  <p>We drove back to Matsumoto avoiding the toll road to stop at viewing points in the winding part of the road on route 158 to enjoy koyo – the autumn foliage. We dropped the car off and headed to Kyoto by Shinkansen (Bullet Train).</p>
                  <p>When we arrived in Kyoto, we checked in to Guesthouse Ga-Jyun. As it’s not cheap in Kyoto, we opted for a room with bunk beds but still a private bathroom at a cost of £50 a night.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/shinkansen.jpg' alt='Japanese bullet train' />
                    <figcaption>Image by tikisada from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 12</h2>
                  <p>Day trip to Nara by train: got to see the friendly deer that are all over the city and in Nara Park. We also did some sightseeing of the historical temples such as Kofukuji and its five storey pagoda, and the amazing Tōdai-ji temple and the Daibutsuden.</p>
                  <p>Nara is definitely a place you should try to get to if time and cost permit it.</p>
                  <p>We probably missed loads while we were there so checkout the Nara page on <a href='https://www.japan-guide.com/e/e2165.html'>www.japan-guide.com</a> to see where you want to visit.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/nara_temple.jpg' alt='Tōdai-ji temple in Nara, Japan' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 13</h2>
                  <p>Full day getting to know Kyoto, we started the day by heading to Kiyomizu-dera Temple via Higashiyama District where we bought some pottery and snacks.</p>
                  <p>From there we headed to Higashiyama Jisho-ji (the Silver Pavillion) and then walked back to our guest house which was located near the Heian Shrine while stopping at the nearby temples. We visited Hōnen-in Temple, Anrakuji Temple and walked the Philosoper’s path heading to Kōunji Temple,  Kumano Nyakuōji Shrine and Eikando Temple. You have to love Kyoto.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/kyoto.jpg' alt='Small temple in Kyoto' />
                    <figcaption>Image by Michelle Maria from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 14</h2>
                  <p>Checked out of guesthouse at 11:00 but left the backpack while we went to explore Kyoto for one last time. We managed to see the Kyoto Jidai Matsuri festival that was paraded through the streets and ended at the Heian Shrine where we enjoyed a stroll in the garden before we headed for the train station to get the Shinkansen to Narita, Tokyo.</p>
                  <p>On arrival to the airport hotel, we threw our bags in the room and headed for the Chinese restaurant for Noodles and Mapo Tofu before heading to bed as we had an early flight home in the morning.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/japan/chinese_food.jpg' alt='Chinese food on a table' />
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

export default JapanItinerary
