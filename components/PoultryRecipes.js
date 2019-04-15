import { Component } from 'react'

import Link from 'next/link'

class PoultryRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Poultry Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/tea_smoked_duck'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/smoked_duck.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Tea Smoked Duck</figcaption>
            <p className='c-recipes__recipe-card__text'>Vietnamese green tea smoked duck breast with salad and baguettes.</p>
          </div>
        </Link>
        <Link href='/quwarmah_ala_dajaj'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/quwarmah_ala_dajaj.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Quwarmah ala Dajaj</figcaption>
            <p className='c-recipes__recipe-card__text'>Traditional Kuwaiti curried chicken cooked with baharat and dried lime.</p>
          </div>
        </Link>
        <Link href='/thai_green_curry'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/thai_green_curry.jpg' />
            </figure>
            <figcaption className='c-recipes__recipe-card__title'>Gaeng Khiao Wan Gai</figcaption>
            <p className='c-recipes__recipe-card__text'>Thai green chicken curry with baby aubergines and snake beans.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default PoultryRecipes
