import { Component } from 'react'

import Link from 'next/link'

class PorkRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Pork Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Kaeng Pa</figcaption>
          <p className='c-recipes__recipe-card__text'>Northern Thai pork curry with green pepper corns and snake beans.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Lu Rou Fan</figcaption>
          <p className='c-recipes__recipe-card__text'>Taiwanese minced pork cooked in a soy with steamed rice and egg.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Mapo Tofu</figcaption>
          <p className='c-recipes__recipe-card__text'>Tofu and minced pork cooked with chilli bean paste and Szechuan peppercorns.</p>
        </div>
      </div>
    </section>
  }
}

export default PorkRecipes
