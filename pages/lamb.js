import { Component } from 'react'

import Layout from '../components/Layout'

class Lamb extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='o-main-container'>
          <div className='c-recipes__container'>
            <h1>Lamb Recipes</h1>
            <div className='section__divider' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <section className='c-recipes-categories'>
              <div className='c-recipes-categories__container'>
                <div className='c-recipes-categories__row-item'>
                  <figure>
                    <img src='/static/images/quwarmah_ala_dajaj_category.jpg' />
                  </figure>
                  <div className='c-recipes-categories__row-item--text'><h4>Caribbean Lamb Stew</h4></div>
                </div>
                <div className='c-recipes-categories__row-item'>
                  <figure>
                    <img src='/static/Images/belly_pork_skewers_category.jpg' />
                  </figure>
                  <div className='c-recipes-categories__row-item--text'><h4>Mutton Chaap</h4></div>
                </div>
                <div className='c-recipes-categories__row-item'>
                  <figure>
                    <img src='/static/Images/indian_lamb_chops_category.jpg' />
                  </figure>
                  <div className='c-recipes-categories__row-item--text'><h4>Seekh Kebab</h4></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default Lamb
