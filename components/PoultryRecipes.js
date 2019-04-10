import { Component } from 'react'

import Link from 'next/link'

class PoultryRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Poultry Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Tea Smoked Duck</figcaption>
          <p className='c-recipes__recipe-card__text'>Vietnamese green tea smoked duck breast with salad and baguettes.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Quwarmah ala Dajaj</figcaption>
          <p className='c-recipes__recipe-card__text'>Traditional Kuwaiti curried chicken cooked with baharat and dried lime.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Thai Green Chicken</figcaption>
          <p className='c-recipes__recipe-card__text'>Thai green chicken curry with baby aubergines and snake beans.</p>
        </div>
      </div>
    </section>
  }
}

export default PoultryRecipes
