import { Component } from 'react'

import Link from 'next/link'

class RecipeCategories extends Component {
  render () {
    return <section className='c-recipe-categories'>
      <h2>Recipes</h2>
      <div className='section__divider' />
      <div className='c-recipe-categories__container'>
        <Link href='/beef'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/lomo_saltado.jpg' alt='Peruvian beef stirfry' />
            </figure>
            <figcaption className='c-recipe-card__title'>Beef</figcaption>
            <p className='c-recipe-card__text'>A selection of beef recipes from Peru, China and the Middle East.</p>
          </div>
        </Link>
        <Link href='/vegetarian'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/tabbouleh.jpg' alt='Meze food platter' />
            </figure>
            <figcaption className='c-recipe-card__title'>Vegetarian</figcaption>
            <p className='c-recipe-card__text'>Have a day off meat with one of these tasty vegetarian dishes.</p>
          </div>
        </Link>
        <Link href='/seafood'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/thai-prawn-curry.jpg' alt='Thai red prawn curry' />
            </figure>
            <figcaption className='c-recipe-card__title'>Seafood</figcaption>
            <p className='c-recipe-card__text'>There's more to seafood than fish &amp; chips. Why not try something spicy. </p>
          </div>
        </Link>
        <Link href='/poultry'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/quwarmah_ala_dajaj.jpg' alt='Kuwaiti curried chicken' />
            </figure>
            <figcaption className='c-recipe-card__title'>Poultry</figcaption>
            <p className='c-recipe-card__text'>Chicken is one of the most popular meats in the world but don't forget the duck.</p>
          </div>
        </Link>
        <Link href='/lamb'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/seekh_kebab.jpg' alt='Indian lamb chops' />
            </figure>
            <figcaption className='c-recipe-card__title'>Lamb</figcaption>
            <p className='c-recipe-card__text'>Lamb is great for curries and kebabs and also works well for marinating and grilling.</p>
          </div>
        </Link>
        <Link href='/pork'>
          <div className='c-recipe-card'>
            <figure className='c-recipe-card__image'>
              <img src='/static/Images/food/kushiyaki.jpg' alt='Japanese belly pork skewers' />
            </figure>
            <figcaption className='c-recipe-card__title'>Pork</figcaption>
            <p className='c-recipe-card__text'>Popular in the Far East, pork is so versatile due to the different cuts that are available.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default RecipeCategories
