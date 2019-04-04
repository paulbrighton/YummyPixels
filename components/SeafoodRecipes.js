import { Component } from 'react'

import Link from 'next/link'

class SeafoodRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Seafood Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/lomo_saltado_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Baja Fish Tacos</figcaption>
          <p className='c-recipes__recipe-card__text'>Mexican fish tacos with red cabbage, pineapple salsa and Baja style sauce. </p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/meze_category.jpg' />
          </figure>
          <figcaption className='c-recipe-card__title'>Camarão na Moranga</figcaption>
          <p className='c-recipes__recipe-card__text'>Brazilian prawn curry cooked with coconut milk and cream.</p>
        </div>
        <div className='c-recipes__recipe-card'>
          <figure className='c-recipes__recipe-card__image'>
            <img src='/static/Images/thai_prawn_curry_category.jpg' />
          </figure>
          <figcaption className='c-recipes__recipe-card__title'>Ackee &amp; Saltfish</figcaption>
          <p className='c-recipes__recipe-card__text'>Traditional Jamaican dish made with salt cod and ackee.</p>
        </div>
      </div>
    </section>
  }
}

export default SeafoodRecipes
