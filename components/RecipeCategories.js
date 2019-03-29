import { Component } from 'react'

import Link from 'next/link'

class RecipeCategories extends Component {
  render () {
    return <section className='c-recipe-categories'>
      <h2>Recipe Categories</h2>
      <div className='section__divider' />
      <div className='c-recipe-categories__container'>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Beef</h4></div>
        </div>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Vegetarian</h4></div>
        </div>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Seafood</h4></div>
        </div>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/images/quwarmah_ala_dajaj_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Poultry</h4></div>
        </div>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/Images/belly_pork_skewers_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Pork</h4></div>
        </div>
        <div className='c-recipe-categories__row-item'>
          <figure>
            <img src='/static/Images/indian_lamb_chops_category.jpg' />
          </figure>
          <div className='c-recipe-categories__row-item--text'><h4>Lamb</h4></div>
        </div>
      </div>
    </section>
  }
}

export default RecipeCategories
