import { Component } from 'react'

import Link from 'next/link'

class VegRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Vegetarian Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Falafel</figcaption>
          <p className='c-recipes__recipe-card__text'>Middle Eastern deep fried balls made of chickpeas served with flatbread.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Som Tam Thai</figcaption>
          <p className='c-recipes__recipe-card__text'>Thai green papaya salad with baby tomatoes, snake beans and peanuts.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Tabbouleh</figcaption>
          <p className='c-recipes__recipe-card__text'>Arabic salad made with bulgur wheat, tomato, cucumber, onions and herbs.</p>
        </div>
      </div>
    </section>
  }
}

export default VegRecipes
