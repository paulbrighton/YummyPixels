import { Component } from 'react'

import Layout from '../components/Layout'

class Kibbeh extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Kibbeh</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/kibbeh.jpg' />
                    <img src='static/Images/food/kibbeh_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <h1>Kibbeh</h1>
              <p className='c-recipe__description-text'>Middle Eastern spiced minced meat and bulgar wheat patties.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 1 Hour</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/meal.svg' alt='Animated hand carrying food' /></figure>
                  <p>Serves: 4</p>
                </div>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/user.svg' alt='Animated head with pencil' /></figure>
                  <p>Author: Thais Brighton</p>
                </div>
              </div>
            </section>
            <section className='c-directions'>
              <div className='c-directions__ingredients'>
                <div className='c-directions__ingredients-items'>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>500g lamb or beef mince</li>
                    <li>250g cracked bulghur wheat</li>
                    <li>1 small bunch of mint leaves</li>
                    <li>1 tbsp Lebanese Seven Spice</li>
                    <li>1 tsp ground cinnamon </li>
                    <li>1 tsp za’atar</li>
                    <li>2 tsp salt</li>
                    <li>2 medium onions, finely chopped</li>
                    <li>50g toasted pine nuts</li>
                    <li>1 tbsp olive oil</li>
                    <li>vegetable oil for frying</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>2 limes, cut into wedges</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Soak the wheat for 30 minutes in cold water. Drain the water and remove the excess by putting the wheat in cheesecloth or thin tablecloth and squeezing.</li>
                    <li>In a bowl, mix half the meat, the wheat, one chopped onion, mint leaves, cinnamon, seven spice and 2tsp of salt. Using a hand blender, process the mixture until smooth and resembles a dough.</li>
                    <li>For the filling, heat the olive oil in a frying pan and add the other onion, pine nuts and the rest of the meat, season with salt and pepper and mix well while it cooks to ensure no lumps are formed.</li>
                    <li>Add the za’atar and continue to cook until the meat is brown and dry. Remove from heat and allow to cool.</li>
                    <li>Make the patties by taking enough of wheat-meat mixture to form an egg-size ball. Punch a hole in the ball and fill with the fried meat. Pinch to close the ball and shape the patties in a oblong shape by rolling the patting between your hands and shaping the ends.</li>
                    <li>Heat the vegetable oil in a deep pan or fryer to 170°C and fry batches of kibbeh for 7-10 minutes until dark brown and crispy.</li>
                    <li>Drain on kitchen paper and serve immediately with a squeeze of lime.</li>
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

export default Kibbeh
