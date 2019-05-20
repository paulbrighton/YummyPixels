import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

class JungleCurry extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Thai Pork Jungle Curry Recipe by Yummy Pixels</title>
        <meta
          name='description'
          content='A northern Thai pork jungle curry with green peppercorns and snake beans by Paul Brighton at Yummy Pixels.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Kaeng Pa - Thai Pork Jungle Curry</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/jungle_curry.jpg' />
                    <img src='static/Images/food/jungle_curry_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Northern Thai pork curry with young green peppercorns, chilli and snake beans.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 25 Mins</p>
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
                    <li>500g pork tenderloin, cut into thin (5mm) medallions</li>
                    <li>2 tbsp vegetable oil</li>
                    <li>1 small tin bamboo shoots drained</li>
                    <li>600ml chicken stock</li>
                    <li>2 red birdseye chillies, sliced</li>
                    <li>2 tbsp Thai fish sauce</li>
                    <li>1 stalk of lemongrass, bruised</li>
                    <li>1 tbsp palm sugar, grated</li>
                    <li>2 stems of fresh green peppercorns</li>
                    <li>7 snake beans, cut into quarters</li>
                    <li>Small bunch of Thai basil, roughly chopped</li>
                    <li>Large bunch of coriander, roughly chopped</li>
                    <li>3 large garlic cloves</li>
                    <li>5cm ginger, roughly chopped</li>
                    <li>3 green chillies deseeded and halved</li>
                    <li>5 kaffir lime leaves</li>
                    <li>1 tsp black peppercorns, crushed</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Steamed jasmine rice</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Place shallots, garlic, ginger, green chillies, lime leaves, black peppercorns and a handful of coriander in a food processor and blend to a fine paste.</li>
                    <li>Heat the oil in a large wok over medium heat and add the paste, stirring constantly to avoid burning for 2 minutes.</li>
                    <li>Add the pork and fry until sealed before adding the stock, fish sauce, lemongrass and palm sugar, bring to boil then simmer for 10 minutes.</li>
                    <li>Add the bamboo shoots, green peppercorns and snake beans and cook for a further 5 minutes.</li>
                    <li>Transfer to bowls and garnish with basil, coriander and red chillies. Served with boiled jasmine rice.</li>
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

export default JungleCurry
