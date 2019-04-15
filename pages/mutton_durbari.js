import { Component } from 'react'

import Layout from '../components/Layout'

class MuttonDurbari extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Mutton Durbari</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/lamb_curry.jpg' />
                    <img src='static/Images/food/lamb_curry_hero.jpg' alt='Indian lamb curry' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Mughlai lamb curry with fried onions.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 120 Mins</p>
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
                    <li>500g lamb diced</li>
                    <li>200ml water</li>
                    <li>1 tbsp tomato puree</li>
                    <li>1 tsp red chilli powder</li>
                    <li>2 tsp white wine vinegar</li>
                    <li>2 green chillies, sliced</li>
                    <li>1 small bunch coriander leaves, chopped</li>
                    <li>3 tbsp vegetable oil</li>
                    <li>Salt to taste</li>
                    <h2>Spice paste: </h2>
                    <li>1 tbsp sesame seeds</li>
                    <li>1 tbsp mustard seeds</li>
                    <li>1 bay leaf</li>
                    <li>1 stick cinnamon</li>
                    <li>2 cloves</li>
                    <li>5 whole black peppercorns</li>
                    <li>1 black cardamom</li>
                    <li>1/2 tbsp crushed garlic</li>
                    <li>1/2 tbsp grated ginger</li>
                    <li>2 tbsp plain yoghurt</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Grind the all spices for the spice paste and mix with the yoghurt, ginger and garlic. Rub into the lamb pieces and leave to marinate in fridge for at least 1 hour.</li>
                    <li>Fry the onions in high heat using 2 tbsp of oil until brown and crispy Drain in kitchen paper.</li>
                    <li>Heat 1 tbsp of oil in a heavy bottomed pan and add the meat together with the marinade. Stir in 3/4 of the fried onions, season with salt and cook for 5 minutes.</li>
                    <li>Add the tomato pure, red chilli powder and vinegar and cook stirring for 2 minutes.</li>
                    <li>Add the water and simmer for 1 hour, stirring occasionally, until the meat is tender and sauce is reduced to a gravy consistency. Oil will separate from the sauce when the sauce is cooked.</li>
                    <li>Mix in the green chillies and coriander leaves. Garnish with the remainder of the fried onions and serve.</li>
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

export default MuttonDurbari
