import { Component } from 'react'

import Link from 'next/link'

class RecipeCategories extends Component {
  render () {
    return <section className='c-recipe-categories'>
      <h2>Recipe Categories</h2>
      <div className='section__divider' />
      <div className='c-recipe-categories__container'>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Beef</figcaption>
          <p className='c-recipe-card__text'>A selection of beef recipes from Peru, China and the Middle East.</p>
        </div>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Vegetarian</figcaption>
          <p className='c-recipe-card__text'>Have a day off meat with one of these tasty vegetarian dishes.</p>
        </div>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Seafood</figcaption>
          <p className='c-recipe-card__text'>There's more to seafood than fish &amp; chips. Why not try something spicy. </p>
        </div>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/images/quwarmah_ala_dajaj_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Poultry</figcaption>
          <p className='c-recipe-card__text'>Chicken is one of the most popular meats in the world but don't forget the duck.</p>
        </div>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/Images/indian_lamb_chops_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Lamb</figcaption>
          <p className='c-recipe-card__text'>Lamb is great for curries and kebabs and also works well for marinating and grilling.</p>
        </div>
        <div className='c-recipe-card'>
          <figure className='c-recipe-card__image'>
            <img src='/static/Images/belly_pork_skewers_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Pork</figcaption>
          <p className='c-recipe-card__text'>Popular in the Far East, pork is so versatile due to the different cuts that are available.</p>
        </div>
      </div>
    </section>
  }
}

export default RecipeCategories
