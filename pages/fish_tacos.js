import { Component } from 'react'

import Layout from '../components/Layout'

class FishTacos extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Baja Fish Tacos</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/fish_tacos.jpg' />
                    <img src='static/Images/food/fish_tacos_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Soft shell tacos topped with seasoned pan fried white fish served with red cabbage, pineapple salsa and Baja style sauce.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 55 Mins</p>
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
                    <li>300g cod or haddock fillet</li>
                    <li>1 tsp salt</li>
                    <li>1 tsp garlic powder</li>
                    <li>1 tsp onion powder</li>
                    <li>2 tsp paprika</li>
                    <li>1 tsp oregano</li>
                    <li>1/2 tsp ground black pepper</li>
                    <li>1 tsp sugar</li>
                    <li>1 small pineapple de-cored in large slices</li>
                    <li>1 medium red onion finely chopped</li>
                    <li>1 orange pepper finely chopped</li>
                    <li>10 baby tomatoes quartered</li>
                    <li>Small bunch of mint finely chops</li>
                    <li>Juice of 3 limes</li>
                    <li>1/4 red cabbage shredded</li>
                    <li>200ml sour cream</li>
                    <li>Coriander roughly chopped</li>
                    <li>2 tbsp olive oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>8 flour tortillas</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>For the seasoning, put the salt, garlic and onion powder, paprika, oregano, pepper and sugar in a bowl and mix well.</li>
                    <li>Mix the sour cream with about one teaspoon of the seasoning and the juice of half a lime in a small bowl. </li>
                    <li>Add the pineapple slices to a dry frying pan and cook on all sides until it starts to char. Remove from pan and chop into 1cm cubes.</li>
                    <li>Put the pineapple to a bowl along with the onion, pepper, tomatoes and mint before adding the juice of 1 lime. Stir well and season with salt and black pepper.</li>
                    <li>Slice the fish into 2cm strips, dip in remaining lime juice and add to bowl with the rest of the seasoning and coat well.</li>
                    <li>Heat the olive oil in a large frying pan over medium heat and cook the fish slices for about 3 minutes on each side until they get slightly crispy. Remove from pan and drain off the oil.</li>
                    <li>Serve the fish on top of warmed tortillas with the pineapple salsa, shredded cabbage and the sour cream sauce.</li>
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

export default FishTacos
