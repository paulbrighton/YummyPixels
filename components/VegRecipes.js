import { Component } from 'react'

import Link from 'next/link'

class VegRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Vegetarian Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/falafel'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/falafel.jpg' alt='Falafel' />
              <figcaption className='c-recipe-card__title'>Falafel</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Middle Eastern deep fried balls made of chickpeas served with flatbread.</p>
          </div>
        </Link>
        <Link href='/papaya_salad'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/papaya_salad.jpg' alt='Thai green papaya salad' />
              <figcaption className='c-recipe-card__title'>Som Tam Thai</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Thai green papaya salad with baby tomatoes, snake beans and peanuts.</p>
          </div>
        </Link>
        <Link href='/tabbouleh'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/tabbouleh.jpg' alt='Tabbouleh' />
              <figcaption className='c-recipes__recipe-card__title'>Tabbouleh</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Arabic salad made with bulgur wheat, tomato, cucumber, onions and herbs.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default VegRecipes
