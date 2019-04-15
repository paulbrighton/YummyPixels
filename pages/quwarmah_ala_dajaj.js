import { Component } from 'react'

import Layout from '../components/Layout'

class QuwarmahAlaDajaj extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Quwarmah ala Dajaj - Kuwaiti Curried Chicken</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/quwarmah_ala_dajaj.jpg' />
                    <img src='static/Images/food/quwarmah_ala_dajaj_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Traditional Kuwaiti curried chicken cooked with baharat and dried lime served with saffron rice.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 2 hours</p>
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
                    <li>600g chicken thighs or legs on the bone and skinned</li>
                    <li>1tsp salt</li>
                    <li>1 tbsp Baharat</li>
                    <li>1/4 tsp ground turmeric</li>
                    <li>1 tbsp vegetable oil</li>
                    <li>1 onion, chopped</li>
                    <li>2 garlic cloves, crushed</li>
                    <li>2cm ginger, grated</li>
                    <li>1 tsp salt</li>
                    <li>1 tsp ground ginger</li>
                    <li>1/2 cinnamon stick</li>
                    <li>1/2 tsp chilli powder </li>
                    <li>1 whole loomi (dried lime) pierced or rind of 1/2 lemon</li>
                    <li>150g peeled and chopped tomatoes</li>
                    <li>Water</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Saffron rice</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Mix the salt, baharat and turmeric and rub half of this mix all over the chicken pieces.</li>
                    <li>Heat the oil in large pan and add the onions. Cook until soft and translucent but not browned. Add the garlic cloves, ginger, cinnamon stick, chilli and the remaining spice mixture to the pan and stir for 2 minutes.</li>
                    <li>Add the chicken pieces to the pan and fry for 5 minutes turning once.</li>
                    <li>Add the tomatoes and enough water to cover the meat. Add the loomi or lemon rind, cover with a lid and simmer for 1 1/2 hours.</li>
                    <li>Check the seasoning, and reduce the sauce over medium heat until a thicker consistency for the gravy is achieved.</li>
                    <li>Serve with saffron rice.</li>
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

export default QuwarmahAlaDajaj
