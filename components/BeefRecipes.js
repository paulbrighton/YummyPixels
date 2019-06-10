import { Component } from 'react'

import Link from 'next/link'

class BeefRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Beef Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/black_bean_noodles'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/black_bean_noodles.jpg' alt='Beef and black bean noodles' />
              <figcaption className='c-recipe-card__title'>Beef &amp; Black Bean Noodles</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Chinese spicy beef and black bean sauce with thick egg noodles.</p>
          </div>
        </Link>
        <Link href='/kibbeh'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/kibbeh.jpg' alt='Kibbeh' />
              <figcaption className='c-recipe-card__title'>Kibbeh</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Middle Eastern spiced minced meat and bulgur wheat patties.</p>
          </div>
        </Link>
        <Link href='/lomo_saltado'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/lomo_saltado.jpg' alt='Lomo saltado' />
              <figcaption className='c-recipes__recipe-card__title'>Lomo Saltado</figcaption>
            </figure>
            <p className='c-recipes__recipe-card__text'>Peruvian stir-fry with beef, red onions, tomatoes and chips.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default BeefRecipes
