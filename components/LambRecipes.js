import { Component } from 'react'

import Link from 'next/link'

class LambRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Lamb Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Bunny Chow</figcaption>
          <p className='c-recipes__recipe-card__text'>South African mutton curry served inside a hollow bread bun.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Mutton Durbari</figcaption>
          <p className='c-recipes__recipe-card__text'>Mughlai spicy lamb curry with fried onions.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Seekh Kebab</figcaption>
          <p className='c-recipes__recipe-card__text'>Grilled spiced lamb mince on a metal skewers served with chilli sauce.</p>
        </div>
      </div>
    </section>
  }
}

export default LambRecipes
