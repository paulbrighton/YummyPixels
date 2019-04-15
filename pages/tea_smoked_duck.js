import { Component } from 'react'

import Layout from '../components/Layout'

class TeaSmokedDuck extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Vietnamese Tea Smoked Duck</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/smoked_duck.jpg' />
                    <img src='static/Images/food/smoked_duck_hero.jpg' alt='Vietnamese tea smoked duck' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Vietnamese style green tea smoked duck breast served with spring onion, chilli, coriander and crusty baguettes.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 35 Mins</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 2</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Thais Brighton</p>
                </div>
              </div>
            </section>
            <section className='c-directions'>
              <div className='c-directions__ingredients'>
                <div className='c-directions__ingredients-items'>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>2 duck breasts, skin on</li>
                    <li>1 tbsp light soy sauce</li>
                    <li>2 tsp fish sauce</li>
                    <li>1 tsp sesame oil</li>
                    <li>1 cinnamon stick</li>
                    <li>2 star anise</li>
                    <li>3 tbsp green tea loose leaves</li>
                    <li>3 tbsp brown sugar</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>handful of coriander leaves, chopped</li>
                    <li>2 spring onion, thinly sliced</li>
                    <li>2 long chilli, thinly sliced</li>
                    <li>2 large baguettes</li>
                    <li>Sriracha sauce</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Place soy, fish sauce, sesame oil and duck breasts in a large bowl. Stir to combine all ingredients and leave to marinate for 1 hour.</li>
                    <li>Heat a frying pan on a low flame and when hot place duck breasts skin side down. Cook for 5 minutes to render down the fat and crisp up the skin, remove the breasts from the pan and discard the excess oil or save for roast potatoes.</li>
                    <li>Place some foil in the bottom of a large wok and add the cinnamon, star anise, tea, sugar and rice. Heat over a medium flame with the lid on until it starts to smoke.</li>
                    <li>Place duck breasts on a wire rack or bamboo steamer and place in the wok, remember to put the lid back on. Smoke for around 10 minutes then turn off and leave to rest.</li>
                    <li>Thinly slice the duck, garnish with spring onion, chilli, sriracha and coriander and serve with the crusty baguettes.</li>
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

export default TeaSmokedDuck
