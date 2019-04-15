import { Component } from 'react'

import Layout from '../components/Layout'

class Falafel extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Falafel</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/falafel.jpg' />
                    <img src='static/Images/food/falafel_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Middle Eastern deep fried balls made of chickpeas served with flatbread, mixed salad and hummus.</p>
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
                    <li>500g raw chickpeas soaked overnight and drained</li>
                    <li>1/2 small onion, roughly chopped</li>
                    <li>Small bunch of chopped fresh parsley</li>
                    <li>3 cloves of garlic</li>
                    <li>1 tbsp flour</li>
                    <li>1 tsp salt</li>
                    <li>1 tsp cumin</li>
                    <li>1/4 tsp black pepper</li>
                    <li>1/4 tsp cayenne pepper</li>
                    <li>Vegetable oil for frying</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Lemon wedges</li>
                    <li>150g mixed leaf salad</li>
                    <li>Flatbread or pitta</li>
                    <li>Hummus</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Add all the ingredients apart from oil to a food processor and process until you end up with a slightly stiff paste, just thick enough to roll into balls. Empty into a bowl and refrigerate for 2 hours.</li>
                    <li>Remove from fridge and roll into equal sized balls, it should make around 15-20 falafels.</li>
                    <li>Heat about 3 cm of oil in a large frying pan over medium heat, add the balls to the pan and keep turning for about 10 minutes until browned on all sides. Remove from pan and drain off any excess oil.</li>
                    <li>Squeeze a little lemon juice over the falafels and serve with flat bread, a mixed salad and hummus.</li>
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

export default Falafel
