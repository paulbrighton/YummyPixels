import { Component } from 'react'

import Link from 'next/link'

class BeefRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Beef Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Beef &amp; Black Bean Noodles</figcaption>
          <p className='c-recipes__recipe-card__text'>Chinese spicy beef and black bean sauce with thick egg noodles.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Kibbeh</figcaption>
          <p className='c-recipes__recipe-card__text'>Middle Eastern spiced minced meat and bulgur wheat patties.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Lomo Saltado</figcaption>
          <p className='c-recipes__recipe-card__text'>Peruvian stir-fry with beef, red onions, tomatoes and chips.</p>
        </div>
      </div>
    </section>
  }
}

export default BeefRecipes
