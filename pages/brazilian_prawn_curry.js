import { Component } from 'react'

import Layout from '../components/Layout'

class BrazilianPrawnCurry extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipe'>
          <div className='c-recipe__container'>
            <section className='c-recipe__header'>
              <h1>Camarão na Moranga - Prawns in Pumpkin</h1>
              <div className='c-recipe__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/food/prawns_in_pumpkin.jpg' />
                    <img src='static/Images/food/prawns_in_pumpkin_hero.jpg' alt='Thai jungle curry with rice' />
                  </picture>
                </figure>
              </div>
              <p className='c-recipe__description-text'>Prawns cooked in a Brazilian curry with coconut milk and cream served inside roasted pumpkins.</p>
              <div className='c-recipe__info'>
                <div className='c-recipe__info-item'>
                  <figure><img src='/static/Images/alarm-clock.svg' alt='Alarm clock' /></figure>
                  <p>Cooking Time: 90 Mins</p>
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
                    <li>4 munchkin pumpkins or 1 medium round pumpkin</li>
                    <li>1 tbsp olive oil</li>
                    <li>400g uncooked shelled prawns</li>
                    <li>1 tsp black pepper</li>
                    <li>1 tsp salt</li>
                    <li>Juice of 1/2 a lime</li>
                    <li>1 tbsp of vegetable oil</li>
                    <li>1 small onion</li>
                    <li>2 garlic cloves</li>
                    <li>200g peeled chopped tomatoes</li>
                    <li>1 red chilli, chopped</li>
                    <li>1 cube of vegetable stock</li>
                    <li>1 tbsp corn flour</li>
                    <li>200ml coconut milk</li>
                    <li>150ml double cream</li>
                    <li>1 small bunch of parsley, chopped</li>
                    <li>2 spring onions, sliced</li>
                  </ul>
                  <h2>To serve: </h2>
                  <ul>
                    <li>Roughly chopped parsley</li>
                  </ul>
                </div>
                <div className='c-directions__instructions'>
                  <h2>Directions</h2>
                  <ol>
                    <li>Preheat the oven to 180°C.</li>
                    <li>Carefully cut a lid on each munchkin pumpkin using a sharp knife. Remove and discard all seeds. Brush the inside of the pumpkins with olive oil and season with salt and pepper.</li>
                    <li>Cover with their lids and wrap each pumpkin with kitchen foil. Put the pumpkins in a tray and cook them in oven for 35 minutes (60 minutes if using one medium pumpkin instead).</li>
                    <li>Once cooked, removed from foil, discard any water from inside the pumpkins and reserve.</li>
                    <li>Mix the prawns with the lemon juice, 1tsp pepper and a pinch of salt. Heat the vegetable oil in a frying pan, add the chopped onion and cook until translucent (around 5 minutes on a medium heat).</li>
                    <li>Add the crushed garlic and chopped chilli and stir then add the prawns and cook for further 2 minutes. Add the tomatoes, vegetable stock and the corn flour diluted in the coconut milk. Cook over medium heat for 10 minutes.</li>
                    <li>Turn off the heat and add the cream, chopped parsley and chopped spring onions. Stir well.</li>
                    <li>Fill each pumpkin with the prawns and sauce. Put the pumpkins in a tray and bake in oven for another 5-7 minutes and serve immediately. </li>
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

export default BrazilianPrawnCurry
