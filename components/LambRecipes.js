import { Component } from 'react'

import Link from 'next/link'

class LambRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Lamb Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/mutton_chaap'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/indian_lamb_chops.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Mutton Chaap</figcaption>
            <p className='c-recipes__recipe-card__text'>Battered and fried spicy Indian lamb cutlets.</p>
          </div>
        </Link>
        <Link href='/mutton_durbari'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/lamb_curry.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Mutton Durbari</figcaption>
            <p className='c-recipes__recipe-card__text'>Mughlai spicy lamb curry with fried onions.</p>
          </div>
        </Link>
        <Link href='/seekh_kebab'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/seekh_kebab.jpg' />
            </figure>
            <figcaption className='c-recipes__recipe-card__title'>Seekh Kebab</figcaption>
            <p className='c-recipes__recipe-card__text'>Grilled spiced lamb mince on a metal skewers served with chilli sauce.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default LambRecipes
