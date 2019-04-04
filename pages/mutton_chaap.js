import { Component } from 'react'

import Layout from '../components/Layout'

class MuttonChaap extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='c-recipes__container'>
          <h1>Mutton Chaap</h1>
          <div className='section__divider' />
          <div className='section__divider' />
          <section className='c-image__hero'>
            <div className='c-image__slider'>
              <figure>
                <img src='/static/Images/jungle_curry_hero.jpg' />
              </figure>
              <div className='c-image__slider--text'><h4>Kaeng Pa - Thai Pork Jungle Curry</h4></div>
            </div>
          </section>
          <p>Grilled spiced lamb mince on a metal skewers served with chilli sauce.</p>
          <div className='c-ingredients'>
            <h5>Makes 10</h5>
            <div className='c-ingredients__items'>
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
            </div>
            <h5>To serve: </h5>
            <div className='c-ingredients__to-serve'>
              <ul>
                <li>Chilli sauce</li>
              </ul>
            </div>
            <div className='c-recipe__instructions'>
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
        </div>
      </main>
    </Layout>
  }
}

export default MuttonChaap
