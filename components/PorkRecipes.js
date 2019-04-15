import { Component } from 'react'

import Link from 'next/link'

class PorkRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Pork Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/jungle_curry'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/jungle_curry.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Kaeng Pa</figcaption>
            <p className='c-recipes__recipe-card__text'>Northern Thai pork curry with green pepper corns and snake beans.</p>
          </div>
        </Link>
        <Link href='/taiwanese_brasied_pork'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/taiwan_brasied_pork.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Lu Rou Fan</figcaption>
            <p className='c-recipes__recipe-card__text'>Taiwanese minced pork cooked in a soy with steamed rice and egg.</p>
          </div>
        </Link>
        <Link href='/mapo_tofu'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/mapo_tofu.jpg' />
            </figure>
            <figcaption className='c-recipes__recipe-card__title'>Mapo Tofu</figcaption>
            <p className='c-recipes__recipe-card__text'>Tofu and minced pork cooked with chilli bean paste and Szechuan peppercorns.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default PorkRecipes
