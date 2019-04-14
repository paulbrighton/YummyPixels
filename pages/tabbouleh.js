import { Component } from 'react'

import Layout from '../components/Layout'

class Tabbouleh extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/tabbouleh.jpg' />
                    <img src='static/Images/food/tabbouleh_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <h1>Tabbouleh</h1>
              <p className='c-recipe__description-text'>Arabic salad made with bulghur wheat, tomato, cucumber, onions, parsley and mint and seasoned with lemon juice and olive oil.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 20 Mins</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 4 as a side dish</p>
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
                    <li>200g bulgar wheat</li>
                    <li>4 medium tomatoes, finely diced</li>
                    <li>half a cucumber, finely diced</li>
                    <li>5 spring onions, thin slices</li>
                    <li>large bunch of parsley, finely chopped</li>
                    <li>Small bunch of mint, finely chopped</li>
                    <li>Zest of 1 lemon </li>
                    <li>4 tbsp olive oil</li>
                    <li>2 tbsp lemon juice</li>
                    <li>1 garlic clove, minced</li>
                    <li>1/2 tsp Lebanese 7 spice powder</li>
                    <li>Salt and pepper</li>
                    <li>1 egg white</li>
                    <li>1 tsp cornflour</li>
                    <li>175g plain flour</li>
                    <li>100ml vegetable oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Lettuce leaves</li>
                    <li>Barbequed meat or fish</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Cook the bulgar as per instructions.</li>
                    <li>Whisk lemon juice, olive oil and garlic for 1 minute.</li>
                    <li>Place the bulgar in a bowl with the all of the ingredients and stir well to combine.</li>
                    <li>Season to taste and serve on top of lettuce leaves with your choice of barbequed or grilled meat or fish.</li>
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

export default Tabbouleh
