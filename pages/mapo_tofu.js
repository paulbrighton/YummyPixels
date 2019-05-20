import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class MapoTofu extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Chinese Pork Mapo Tofu Recipe by Yummy Pixels</title>
        <meta
          name='description'
          content='A Chinese hot and spicy Szechuan Pork Mapo Tofu recipe by Paul Brighton at Yummy Pixels.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Spicy Szechuan Mapo Tofu</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/mapo_tofu.jpg' />
                    <img src='static/Images/food/mapo_tofu_hero.jpg' alt='Mapo Tofu' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Tofu and minced pork cooked with chilli bean paste, fermented black beans, chilli oil and Szechuan peppercorns.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 35 Mins</p>
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
                    <li>300g pork mince</li>
                    <li>350g silken tofu, cut into 1 cm cubes</li>
                    <li>1 tbsp chilli flakes</li>
                    <li>1 tbsp chilli oil</li>
                    <li>2 tbsp Sichuan pepper, finely ground</li>
                    <li>1 tbsp black peppercorns, crushed</li>
                    <li>2 tbsp ginger, finely minced</li>
                    <li>2 tbsp garlic, finely minced</li>
                    <li>2 tbsp chilli bean paste</li>
                    <li>1 tsp fermented black bean paste</li>
                    <li>500ml chicken stock</li>
                    <li>1 tbsp groundnut oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>1 large spring onion, small rings</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Heat the groundnut oil in a large wok over medium heat and add the garlic and ginger paste and cook for about 1 minute.</li>
                    <li>Add the pork mince and break up with a wooden spoon before adding the chilli flakes, chilli oil, Sichuan pepper and peppercorns.</li>
                    <li>Add the chilli bean and black bean paste and stir through before adding the chicken stock. Bring to boil then turn down, cover and simmer for 30 minutes.</li>
                    <li>Carefully add the tofu and simmer for 10 minutes uncovered to reduce the sauce and allow the tofu to take on the flavour.</li>
                    <li>Serve in bowl with steamed rice or noodles and garnish with spring onion.</li>
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

export default MapoTofu
