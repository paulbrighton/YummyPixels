import { Component } from 'react'

import Layout from '../components/Layout'
import Travel from '../components/Travel'
import Cookbook from '../components/Cookbook'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='o-main-container'>
          <section className='c-image__hero'>
            <div className='c-image__slider'>
              <figure>
                <img src='/static/Images/jungle_curry_hero.jpg' />
              </figure>
              <div className='c-image__slider--text'><h4>Kaeng Pa - Thai Pork Jungle Curry</h4></div>
              <div className='c-image__slider--button'><button>Get the Recipe</button></div>
            </div>
          </section>

          <section className='c-about'>
            <div className='c-about__text'>
              <p>YummyPixels was born when Food Photographer Paul Brighton and his wife and food stylist, Thais, realised that their photo shoot sessions conveyed their love for the food they tasted during their travels around the world.</p>
              <p>This website is result of testing recipes, cooking, styling and photographing the food that they discovered and learned to enjoy daily.</p>
              <p>The world’s diversity can easily be verified by the way each ethnic group cooks, as this is a long lasting identifier of their culture.</p>
              <p>Paul Brighton is a UK based photographer and Web Developer who has a focus on food, commercial and travel photography. His interest in travel photography came from years of adventuring around Asia, Africa and South America. While observing the world he truly found his calling as a photographer and began looking for how to creatively express himself by further exploring the idea of visual perception.</p>
              <p>Travelling has been a long-life passion, but most recently, food photography has given him the opportunity to work with a variety of subjects as well as the chance to reproduce different concepts.</p>
            </div>
          </section>
          
          <Cookbook />

          <section className='c-recipe-categories'>
            <div class='c-recipe-categories__container'>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/Images/lomo_saltado_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Beef</h4></div>
              </div>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/Images/meze_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Vegetarian</h4></div>
              </div>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/Images/thai_prawn_curry_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Seafood</h4></div>
              </div>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/images/quwarmah_ala_dajaj_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Poultry</h4></div>
              </div>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/Images/belly_pork_skewers_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Pork</h4></div>
              </div>
              <div className='c-recipe-categories__row-item'>
                <figure>
                  <img src='/static/Images/indian_lamb_chops_category.jpg' />
                </figure>
                <div className='c-recipe-categories__row-item--text'><h4>Lamb</h4></div>
              </div>
            </div>
          </section>

          <section className='c-travelling'>
            <h2>Travel</h2>
            <div className='section__divider' />
            <div className='c-travelling__img'>
              <Travel />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  }
}

export default Index
