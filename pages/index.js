import { Component } from 'react'

import Layout from '../components/Layout'
import Travel from '../components/Travel'
import Cookbook from '../components/Cookbook'
import RecipeCategories from '../components/RecipeCategories'
import About from '../components/About'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <h1>Yummy Pixels Food and Travel Blog</h1>
        <div className='section__divider' />
        <section className='c-hero__image'>
          <figure>
            <img src='static/Images/jungle_curry_hero.jpg' />
          </figure>
          <div className='c-hero__image--text'><h4>Kaeng Pa - Thai Pork Jungle Curry</h4></div>
        </section>

        <About />

        <Cookbook />

        <RecipeCategories />

        <Travel />

      </main>
    </Layout>
  }
}

export default Index
