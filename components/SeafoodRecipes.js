import { Component } from 'react'

import Link from 'next/link'

class SeafoodRecipes extends Component {
  render () {
    return <section className='c-recipes'>
      <h1>Seafood Recipes</h1>
      <div className='section__divider' />
      <div className='c-recipes__container'>
        <Link href='/fish_tacos'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/fish_tacos.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Baja Fish Tacos</figcaption>
            <p className='c-recipes__recipe-card__text'>Mexican fish tacos with red cabbage, pineapple salsa and Baja style sauce. </p>
          </div>
        </Link>
        <Link href='/brazilian_prawn_curry'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/prawns_in_pumpkin.jpg' />
            </figure>
            <figcaption className='c-recipe-card__title'>Camarão na Moranga</figcaption>
            <p className='c-recipes__recipe-card__text'>Brazilian prawn curry cooked with coconut milk and cream.</p>
          </div>
        </Link>
        <Link href='/salt_fish_ackee'>
          <div className='c-recipes__recipe-card'>
            <figure className='c-recipes__recipe-card__image'>
              <img src='/static/Images/food/salt_fish_ackee.jpg' />
            </figure>
            <figcaption className='c-recipes__recipe-card__title'>Ackee &amp; Saltfish</figcaption>
            <p className='c-recipes__recipe-card__text'>Traditional Jamaican dish made with salt cod and ackee.</p>
          </div>
        </Link>
      </div>
    </section>
  }
}

export default SeafoodRecipes
