import { Component } from 'react'

import Layout from '../components/Layout'

class BlackBeanNoodles extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Beef &amp; Black Bean Noodles</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/black_bean_noodles.jpg' />
                    <img src='static/Images/food/black_bean_noodles_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Chinese spicy beef and black bean sauce with red chilli and thick egg noodles.</p>
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
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>
            <section className='c-directions'>
              <div className='c-directions__ingredients'>
                <div className='c-directions__ingredients-items'>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>300g rump steak, thinly sliced</li>
                    <li>1 tbsp fermented black beans</li>
                    <li>1 large red chilli, 1/2 finely chopped, 1/2 sliced</li>
                    <li>2 garlic cloves, finely chopped</li>
                    <li>1 inch fresh ginger, finely chopped</li>
                    <li>1 tsp sesame oil</li>
                    <li>1 tbsp soy sauce</li>
                    <li>1 tbsp oyster sauce</li>
                    <li>1 tbsp shaoxsing rice wine</li>
                    <li>1/2 tsp ground black pepper</li>
                    <li>50ml water</li>
                    <li>200g thick egg noodles</li>
                    <li>1 tbsp groundnut oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Red chilli slices</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Place noodles in boiling water and simmer until cooked. Run under cold water, drain and set aside.</li>
                    <li>Heat the oil in a wok until smoking, add ginger, garlic and chopped chilli and stir fry for 30 seconds, then add the beef and stir fry for a further 1 minute.</li>
                    <li>Add black beans, fry for 1 minute the add soy, oyster sauce and rice wine, cook for another minute before adding the black pepper and water.</li>
                    <li>Toss noodles in sesame oil before adding to the beef, mix and cook until hot then transfer to a bowl.garnish with fresh red chilli slices and serve.</li>
                    <li>Garnish with fresh red chilli slices and serve.</li>
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

export default BlackBeanNoodles
