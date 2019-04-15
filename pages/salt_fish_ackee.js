import { Component } from 'react'

import Layout from '../components/Layout'

class SaltFishAndAckee extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Jamaican Ackee & Saltfish</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/salt_fish_ackee.jpg' />
                    <img src='static/Images/food/salt_fish_ackee_hero.jpg' alt='Salt fish and ackee' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Traditional Jamaican dish made of salt cod and ackee fruit served with fried dumplings and callaloo.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 15 Mins</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 4</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Paul Brighton</p>
                </div>
              </div>
            </section>
            <section className='c-directions'>
              <div className='c-directions__ingredients'>
                <div className='c-directions__ingredients-items'>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>320g can of saltfish, drained</li>
                    <li>540g can of ackee, drained</li>
                    <li>1 large onion, chopped</li>
                    <li>1 large green pepper, thin strips</li>
                    <li>1 medium tomato, chopped</li>
                    <li>2 cloves of garlic, minced</li>
                    <li>1 scotch bonnet pepper, chopped finely</li>
                    <li>2 spring onions, chopped</li>
                    <li>1 tbsp extra virgin olive oil</li>
                    <li>Salt and pepper to taste</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Jamaican Fried Dumplings</li>
                    <li>Callaloo</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Heat the oil in a large frying pan over medium heat and fry the onion, garlic, scotch bonnet and green pepper for about 5 minutes until tender.</li>
                    <li>Add the tomatoes and spring onion and cook for a further 2 minutes.</li>
                    <li>Add the saltfish and ackee, cook for a further 3 minutes then season to taste with salt and black pepper.</li>
                    <li>Serve immediately with <a href='https://www.africanbites.com/dumpling/'>Jamaican Fried Dumplings</a> and Callaloo.</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default SaltFishAndAckee
