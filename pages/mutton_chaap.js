import { Component } from 'react'

import Layout from '../components/Layout'

class MuttonChaap extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Mutton Chaap - Indian Lamb Chops</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/indian_lamb_chops.jpg' />
                    <img src='static/Images/food/indian_lamb_chops_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Fried battered spicy lamb cutlets garnished with coriander and chaat masala.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 55 Mins</p>
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
                    <li>800g medium cut lamb chops (approx 8 in total)</li>
                    <li>1 litre semi-skimmed milk</li>
                    <li>8 green cardamom pods, crushed</li>
                    <li>8 cloves</li>
                    <li>1 bay leaf</li>
                    <li>1 tsp black peppercorns</li>
                    <li>1 tsp ground cinnamon</li>
                    <li>2 green chillies, finely chopped</li>
                    <li>1 tsp salt</li>
                    <li>1 tsp ground ginger</li>
                    <li>1 tbsp fennel seeds, ground</li>
                    <li>1 tsp ground black pepper</li>
                    <li>1 tsp ground green cardamon seeds</li>
                    <li>1 egg white</li>
                    <li>1 tsp cornflour</li>
                    <li>175g plain flour</li>
                    <li>100ml vegetable oil</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>1 tsp chaat masala</li>
                    <li>Small bunch of coriander</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Add half the milk to a large saucepan along with the cloves, fennel seeds, black peppercorns, ginger, cinnamon, cardamom pods and ginger.</li>
                    <li>Simmer for 10 minutes before adding the lamb chops and continue to simmer for a further 5 minutes then leave to cool in the pan.</li>
                    <li>Lightly beat the egg white in a large mixing bowl then add the flour, cornflour, black pepper, fennel, cardamom, salt, ginger and chillies and mix well.</li>
                    <li>Remove the lamb from the pan and strain the milk. Add the milk slowly to the flour mixture constantly whisking until it reaches a single cream consistency. Now add the chops to the batter and coat evenly.</li>
                    <li>Heat the oil in a large frying pan over medium heat and add the battered chops. Fry the chops on both sides until the batter is a nice golden brown, fry in batches to avoid overcrowding the pan.</li>
                    <li>Serve on a platter and garnish with fresh coriander and a pinch of chaat masala.</li>
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
