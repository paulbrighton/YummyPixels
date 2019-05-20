import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class MuttonChaap extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Thai Green Chicken Curry Recipe by Yummy Pixels</title>
        <meta
          name='description'
          content='A Thai Green Chicken Curry (Gaeng Khiao Wan Gai) recipe cooked with baby aubergines and snake beans by Paul Brighton at Yummy Pixels.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Gaeng Khiao Wan Gai - Thai Green Chicken Curry</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/thai_green_curry.jpg' />
                    <img src='static/Images/food/thai_green_curry_hero.jpg' alt='Thai green chicken curry' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Thai green chicken curry with baby aubergines and snake beans and served with sticky rice.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 20 Mins</p>
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
                    <li>600g chicken breasts, cut into strips</li>
                    <li>400ml coconut milk</li>
                    <li>5 red Birdseye chillies, finely sliced</li>
                    <li>100g fresh snake beans, halved</li>
                    <li>15 Thai Pea Aubergines</li>
                    <li>6 kaffir lime leaves, finely sliced</li>
                    <li>2 tbsp fish sauce</li>
                    <li>2 tbsp palm sugar</li>
                    <li>1 cup Thai basil leaves</li>
                    <li>2 tbsp vegetable oil for frying</li>
                  </ul>
                  <h2>For the paste: </h2>
                  <ul>
                    <li>4 cloves of garlic</li>
                    <li>2 shallots</li>
                    <li>3cm ginger</li>
                    <li>2 stalks of lemongrass, roughly chopped</li>
                    <li>2 large green chillies, halved</li>
                    <li>large bunch of fresh coriander</li>
                    <li>2 tablespoons fish sauce</li>
                    <li>Juice of 1/2 lime</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Steamed sticky rice</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Roughly chop all the ingredients for the paste and put in a food blender. Blend into a fine paste.</li>
                    <li>Heat the oil in a large saucepan over medium heat and fry the paste for 2 minutes.</li>
                    <li>Add the chicken and cook until sealed all over before adding the coconut milk, fish sauce, sugar and lime leaves. Bring to boil then simmer for 7 minutes.</li>
                    <li>Add the beans, aubergines and red chillies and cook for a further 5 minutes.</li>
                    <li>Serve in a bowl, garnish with with basil leaves and serve with sticky rice.</li>
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

export default MuttonChaap
