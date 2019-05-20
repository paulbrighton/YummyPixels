import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class PapayaSalad extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Thai Green Papaya Salad Recipe by Yummy Pixels</title>
        <meta
          name='description'
          content='A Thai Green Papaya Salad (Som Tam Thai) recipe with baby tomatoes, snake beans and a sprinkle of peanuts by Paul Brighton at Yummy Pixels.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Som Tam Thai - Green Papaya Salad</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/papaya_salad.jpg' />
                    <img src='static/Images/food/papaya_salad_hero.jpg' alt='Thai papaya salad' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Thai green papaya salad with baby tomatoes, snake beans and a sprinkle of peanuts.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 15 Mins</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 2</p>
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
                    <li>1 medium green papaya, shredded</li>
                    <li>10 cherry tomatoes, halved</li>
                    <li>50g snake beans, blanched in boiling water and halved</li>
                    <li>1 red chilli, finely sliced</li>
                    <li>1 tbsp fish sauce</li>
                    <li>Juice of 1 lime</li>
                    <li>1 garlic clove, minced</li>
                    <li>1 tbsp palm sugar</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>2 tablespoons raw peanuts</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Place peanuts in a dry frying pan on high heat and toast for 2 minutes constantly moving to avoid burning. Transfer to pestle and mortar and lightly crush.</li>
                    <li>Place all ingredients except peanuts in a bowl and mix together.</li>
                    <li>Lightly beat the egg white in a large mixing bowl then add the flour, cornflour, black pepper, fennel, cardamom, salt, ginger and chillies and mix well.</li>
                    <li>Transfer to individual plates and top with a sprinkle of the toasted peanuts.</li>
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

export default PapayaSalad
