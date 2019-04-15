import { Component } from 'react'

import Layout from '../components/Layout'

class LomoSaltado extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Lomo Saltado - Peruvian Stir-Fry</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/lomo_saltado.jpg' />
                    <img src='static/Images/food/lomo_saltado_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Peruvian stir-fry with beef, red onions, tomatoes and chips garnished with parsley and coriander.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 20 Mins</p>
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
                    <li>300g sirloin steak, cut into thick slices</li>
                    <li>1 medium red onion, roughly chopped</li>
                    <li>3 medium tomatoes, quartered</li>
                    <li>1 red chilli, deseeded and thinly sliced</li>
                    <li>1 tbsp vodka</li>
                    <li>2 tbsp amarillo chilli sauce</li>
                    <li>handful coriander leaves, finely chopped</li>
                    <li>2 garlic cloves, chopped</li>
                    <li>75ml soy sauce</li>
                    <li>1 tbsp red wine vinegar</li>
                    <li>1 tsp Worcestershire sauce</li>
                    <li>1/2 tsp dried oregano</li>
                    <li>1/2 tsp ground cumin</li>
                    <li>1 tbsp vegetable oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Chunky chips</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Combine the soy sauce, garlic, red wine vinegar, oregano, and cumin in a bowl, add the steak and mix well. Cover with clingfilm and leave to marinate for at least 1 hour.</li>
                    <li>Remove meat from the marinade and heat the oil in a wok until smoking. Stir fry the steak until browned all over then add the onion and cook for 1minute.</li>
                    <li>Add the tomato, chilli and vodka along with the marinade and chilli sauce and cook for a further 2 minutes.</li>
                    <li>Garnish with coriander and serve with fresh chunky chips.</li>
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

export default LomoSaltado
