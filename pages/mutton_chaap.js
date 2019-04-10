import { Component } from 'react'

import Layout from '../components/Layout'

class MuttonChaap extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/jungle_curry_hero_mobile.jpg' />
                    <img src='static/Images/jungle_curry_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <h1>Kaeng Pa - Thai Pork Jungle Curry</h1>
              <p className='c-recipe__description-text'>Northern Thai pork curry with young green pepper corns, chillies and snake beans.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 30 Mins</p>
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
                    <li>700g minced lamb</li>
                    <li>1 egg</li>
                    <li>2 large green chillis</li>
                    <li>1 onion</li>
                    <li>1 tsp coriander powder</li>
                    <li>1 tsp ground cumin</li>
                    <li>1 tbsp garam masala</li>
                    <li>1 large bunch fresh coriander</li>
                    <li>1 tsp salt</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Chilli sauce</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Place the lamb mince in a large mixing bowl with the egg, coriander powder, cumin and garam masala.</li>
                    <li>Roughly chop the onion, chilli and coriander and blend using a food processor until you get a rough paste.</li>
                    <li>Add the paste to the mixing bowl and massage well by hand until it is all combined and quite stiff then place in the fridge for 2 hours to firm up.</li>
                    <li>Remove from fridge and squeeze the meat mixture around some metal skewers to form your kebabs.</li>
                    <li>Place the kebabs on a hot griddle and turn often until browned on all sides and cooked through.</li>
                    <li>Serve on a platter with a chilli sauce dip.</li>
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

export default MuttonChaap
