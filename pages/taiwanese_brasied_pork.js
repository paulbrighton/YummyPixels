import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class TaiwanBraisedPork extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Taiwanese Braised Pork Recipe by Yummy Pixels</title>
        <meta
          name='description'
          content='A Taiwanese Braised Pork Rice Bowl (Lu Rou Fan) recipe cooked in a soy and caramelised onion sauce by Paul Brighton at Yummy Pixels.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Lu Rou Fan (Taiwanese Braised Pork Rice Bowl)</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/taiwan_brasied_pork.jpg' />
                    <img src='static/Images/food/taiwan_brasied_pork_hero.jpg' alt='Taiwanese braised pork' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Taiwanese minced pork cooked in a soy and caramelised onion sauce served on top of steamed rice.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 1 Hour</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 4</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>
            <section className='c-directions'>
              <div className='c-directions__ingredients'>
                <div className='c-directions__ingredients-items'>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>300g minced pork</li>
                    <li>100ml vegetable or canola oil</li>
                    <li>1 medium onion finely sliced</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1 teaspoon five-spice powder</li>
                    <li>2 tsp brown sugar</li>
                    <li>50 ml dark soy sauce</li>
                    <li>100ml light soy sauce</li>
                    <li>50 ml Chinese rice wine</li>
                    <li>2 spring onions sliced</li>
                    <li>300 ml Water</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>4 hard boiled eggs</li>
                    <li>4 spring onions, sliced</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Heat the oil in a large frying pan on high heat and add the onion. Stir constantly until onions are lightly browned and slightly crispy. Transfer onto kitchen paper and remove as much oil as possible. Lightly crush when cooled.</li>
                    <li>In a large wok, heat 1 tablespoon of oil over medium heat and add garlic, cook for 1 minute. Add the pork mince.and stir until coloured all over and has broken into pieces.</li>
                    <li>Add the dark and light soy sauce along with rice wine sugar and five spice powder and cook for around 2 minutes before adding the water. Bring to boil then turn down and simmer for 40 minutes.</li>
                    <li>Add the onions and cook over high heat until onions have dissipated and thickened the sauce.</li>
                    <li>Serve on steamed white rice, garnish with the spring onion and a hard boiled egg on the side.</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default TaiwanBraisedPork
