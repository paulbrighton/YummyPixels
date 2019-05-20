import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class ChinaItinerary extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>China and Hong Kong 16 day travel itinerary by Yummy Pixels</title>
        <meta
          name='description'
          content='A travel itinerary for China and Hong Kong that shows you how to see Beijing, Datong, Pingyao, Chengdu, Yangshuo and Hong Kong in 16 days.'
          key='viewport'
        />
      </Head>
      <main className=''>
        <div className='c-itinerary'>
          <div className='c-itinerary__container'>
            <section className='c-itinerary__header'>
              <h1>16 Days in China &amp; Hong Kong</h1>
              <div className='c-itinerary__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/china/great_wall.jpg' />
                    <img src='static/Images/china/great_wall_hero.jpg' alt='Chinese style gate in front of a temple' />
                  </picture>
                </figure>
                <figcaption>Image by Johannes Plenio from Pixabay </figcaption>
              </div>
              <div className='c-itinerary__description-text'>
                <p>Beijing - Datong - Pingyao - Chengdu - Yangshuo -  Hong Kong</p>
              </div>

              <div className='c-itinerary__info'>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/calendar.svg' alt='Animated calendar' /></figure>
                  <p>Duration: 16 Days</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/budget.svg' alt='Animated paper and calculator' /></figure>
                  <p>Cost: £3200 for 2</p>
                </div>
                <div className='c-itinerary__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>

            <section className='c-itinerary__main'>
              <div className='c-itinerary__main--intro'>
                <p>If you love Asia, there’s one place that can’t be missed, China, hard to see all of it with so little time but we did manage to fly into Beijing and fly out of Hong Kong and saw quite a lot in 16 days.</p>
                <p>We started in Beijing and got to see the Great Wall from there in one day, from Beijing we used a combination of plane, train and bus to make it all the way down to Hong Kong for our flight home.</p>
                <p>We saw pandas in Chengdu, the Yungang Grottoes near Datong, the ancient town of Pingyao, karst mountains around Yangshuo and of course, the amazing city of Hong Kong.</p>
              </div>
            </section>
          </div>
          <section className='c-itinerary__main'>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 1</h2>
                  <p>We arrived in Beijing at around 15:00 and went straight to our hotel, the Beijing Downtown Travelotel which was situated in the old traditional hutong area.</p>
                  <p>Time to relax and sort out our trip to the Great Wall of China that we could book with the hotel which was handy then went for a stroll around the local area and found a Peking duck restaurant for supper which was amazing. </p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/hutong_beijing.jpg' alt='Bicycle resting on wall in Beijing' />
                    <figcaption>Photo by Chastagner Thierry on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 2</h2>
                  <p>Today was the day to see the Great Wall of China, we had booked a mini bus to take us to Jinshanling, it is around 130 kilometres from Beijing and took us around two hours.</p>
                  <p>Jinshanling was one of the places where the wall had not been renovated as some other parts so attracted less tourists. It can be a hard trek at times but is well worth the time and effort to see the wall disappearing into the distance.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/great_wall_china.jpg' alt='Great wall of China' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 3</h2>
                  <p>Full day to explore Beijing, we first headed to The Forbidden City which is a massive palace complex that was built in the 15th century. It contains 980 building and covers an area of around 72 hectares.</p>
                  <p>Next on the list was Tiananmen Square in central Beijing, it contains the Monument to the People's Heroes, the Great Hall of the People, the National Museum of China, and the Mausoleum of Mao Zedong.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/forbidden_city.jpg' alt='Head of reclining buddha in Yangon' />
                    <figcaption>Photo by Ling Tang on Unsplash</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 4</h2>
                  <p>We checked out of the hotel but had time to kill so went for another stroll around the local area visiting various bars and going for some North Chinese food, it was Cumin Stir-fried Lamb on the menu today which was new to me as never seen much lamb on Chinese menus at home.</p>
                  <p>At around 21:00 we headed to Beijing train station to catch our sleeper train to Datong in northern Shanxi Province to see the Yungang Grottoes.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/chinese_food.jpg' alt='A train in a station in Yangon' />
                    <figcaption>Photo by karriezhu at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 5</h2>
                  <p>We arrived in Datong at around 6:00 and dropped our backpack in a hotel before going for a noodle and dumpling breakfast at a close by café.</p>
                  <p>We had a full day tour of the Yungang Grottoes, ancient Chinese Buddhist temples carved out of rock. There are 53 major caves, along with over 5,000 recesses housing the same number of Buddha statues. we also got to see the Hanging Temple (Xuankong Temple).</p>
                  <p>As we were heading to Pingyao that night, we chilled a bit in the hotel before heading to the train station for another sleeper train at about 21:00.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/datong_buddha.jpg' alt='Large Buddha at Yungang Grottoes' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 6</h2>
                  <p>The train arrived in Pingyao at about 6:00, it is a fascinating ancient walled city and when going through the gates, it felt like we were going back in time. We stayed at the Pingyao Zhengjia International Youth Hostel, a lovely little hostel with a traditional central courtyard.</p>
                  <p>Full day to explore the old city, there are lots of restaurants and bars within the walls that can make the sightseeing even more pleasant. One downside of Pingyao was the pollution as it was a city that was still run predominantly on coal.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/pingyao.jpg' alt='Street view in Pingyao, China' />
                    <figcaption>Photo by janeb13 at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 7</h2>
                  <p>Another day to see more of Pingyao, there’s loads of hidden gems down small side streets and although it’s not a massive town, it’s easy to get lost.</p>
                  <p>We were heading to Chengdu that night so that afternoon we got a taxi (2 hours) from Pingyao to the closest airport, Taiyuan. China is massive so overland travel on such a short trip is just not possible, this is why we were flying for most of the rest of the trip, this flight takes around 2 hours.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/pingyao_street.jpg' alt='Man sleeping on bench in Pingyao, China' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 8</h2>
                  <p>The two main reasons for our visit to Chengdu in Sichuan province were spicy Chinese food and pandas. Chengdu is the home of the <a href='http://www.panda.org.cn/english/'>Cheng du Research Base of Giant Panda Breeding</a> and this is the place to come to see a panda, we saw loads.</p>
                  <p>The food, especially for us with a love of spicy food, is probably the best in China. Some dishes that you should try while visiting Chengdu is Mapo Tofu and the super spicy hotpot with various meats and vegetables that are dipped in the soupy stock.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/chengdu_panda.jpg' alt='Panda eating bamboo' />
                    <figcaption>Photo by sharonang at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 9</h2>
                  <p>We needed to get to Yangshuo and that meant another flight to Guilin located in Guangxi Zhuang Autonomous Region, this was a flight that took around 2 hours. We stayed in Guilin that night and had a trip planned to see the Longsheng Rice Terraces the following day.</p>
                  <p>Guilin is one of the new, very modern cities that are being built in China now and we would have loved to have seen more of it.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/guilin.jpg' alt='Guilin city at night in China' />
                    <figcaption>Photo by buguilin at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 10</h2>
                  <p>Day trip to Longsheng Rice Terraces today, it is one of the largest rice terrace complexes in the world. It is located about 80km from Guilin so is easy to do in a day and there is also some hill tribe villages there to visit.</p>
                  <p>When we arrived back in Guilin, we got a taxi to take us to Yangshuo which takes around 80 minutes and got the taxi to drop us off at our hotel where we would be staying for 3 nights. The guesthouse was called Trippers Carpe Diem and was located at the top of a hill with stunning views out over the paddy fields but still within walking distance of the town.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/longshen_rice_terrace.jpg' alt='Longsheng Rice Terraces' />
                    <figcaption>Photo by dlahuerta at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container c-itinerary__main__container--dark'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 11</h2>
                  <p>We booked a tour that took us on the Li River on a bamboo raft, most of it was a slow paced and allowed us to take in the stunning landscape, the locals farming the land and also a water buffalo or two.</p>
                  <p>That night we went to see the local fisherman on the river that use cormorants to help them catch fish. The birds catch the fish as they normally do but have their neck tied to stop them from swallowing, it is a practice that goes back hundreds of years. This practice might be seen as being cruel nowadays but it was interesting and the birds did get some of the fish to eat.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/yangshuo_buffalo.jpg' alt='Temple in middle of Inle Lake, Myanmar' />
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 12</h2>
                  <p>The guesthouse rented mountain bikes so we decided to cycle to Moon Hill, there are about 800 steps to reach the top of the hill and once there, the hill has a huge hole in it that acts as a frame to the impressive views of the karst mountains of Yangshuo county.</p>
                  <p>The nightlife in Yangshuo is also worth a visit with many bars and restaurants and a night market selling food from the region like pot roasted chicken and barbequed meats. There is also an outdoor cultural light show called Liu San Jie Impression Light Show on the Li River at night which is worth a visit.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/yangshuo_rice_paddy.jpg' alt='Rice paddy and mountains in Yangshuo, China' />
                    <figcaption>Photo by hbieser at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container c-itinerary__main__container--dark'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 13</h2>
                  <p>Time to leave Yangshuo and go to our last destination, Hong Kong. We flew from Guilin to Shenzhen (5-hour flight) then got a bus to the border of Hong Kong which takes around two hours.</p>
                  <p>From there, we got another bus to Hong Kong Island and then a taxi to our hotel, the ibis Hong Kong North Point Hotel. Hong Kong is expensive, but we managed to find a room here for £50 a night which is not so bad.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/hong_kong_night.jpg' alt='Phaung Daw Oo Pagoda, Inle Lake, Myanmar' />
                    <figcaption>Photo by daveykialoa at Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 14</h2>
                  <p>Full day to explore Hong Kong, we went to get a view of the city from Victoria Peak (The Peak) and we used the famous tram to get to the top. There’s plenty to do at the The Peak with restaurants, bars and shops and the 360-degree viewing platform at Sky Terrace 428.</p>
                  <p>We then went to see the impressive buildings from ground level and found some nice on street restaurants where we had stir-fried meat and vegetables and fried noodles.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/hong_kong.jpg' alt='View of Hong Kong from Victoria peak' />
                    <figcaption>Image by Myriams-Fotos from Pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--dark'>
              <div className='c-itinerary__main__container c-itinerary__main__container--dark'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 15</h2>
                  <p>Went across the bay to have a look around Mongkok in Kowloon, it is a popular area for shopping, dining and drinking, this side of the bay also gives you a great view of Hong Kong Island.</p>
                  <p>Any trip to Hong Kong is not complete without a visit to a Dim Sum Tea House, they have a large selection of Dim Sum including dumplings, bao, steamed meatballs and spring rolls all washed down with Oolong tea.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/dim_sum.jpg' alt='Dim sum dumplings' />
                    <figcaption>Image by Skybluesrich at pixabay</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='c-itinerary__main--day c-itinerary__main--day--light'>
              <div className='c-itinerary__main__container c-itinerary__main__container--light'>
                <div className='c-itinerary__main--day-text'>
                  <h2>Day 16</h2>
                  <p>Last day in Hong Kong so we checked out of the hotel and went to have a look at the local markets. There is such a diverse and strange selection of food on offer in these markets, a lot of things we had never seen before, even throughout our trip in China.</p>
                  <p>Lastly, a visit to a local restaurant/café that seemed to be for government workers where we had some more Cantonese food before getting a taxi to the airport for our flight home.</p>
                  <p>A tiring trip but really worth it to see all this in just over two weeks, a must for anybody with a love of Asia.</p>
                </div>
                <div className='c-itinerary__main--day-img'>
                  <figure className='c-itinerary__main--image'>
                    <img src='/static/Images/china/hong_kong_market.jpg' alt='View of Hong Kong from Victoria peak' />
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

export default ChinaItinerary
