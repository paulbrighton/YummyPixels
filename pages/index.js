import { Component } from 'react'
import Link from 'next/link'

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
            <picture>
              <source media='(max-width: 768px)' srcSet='static/Images/jungle_curry_hero_mobile.jpg' />
              <img src='static/Images/jungle_curry_hero.jpg' alt='Thai jungle curry with rice' />
            </picture>
          </figure>
          <div className='c-hero__image--text'><h4>Kaeng Pa - Thai Pork Jungle Curry</h4></div>
          <Link href='/mutton_chaap'>
            <button className='c-hero__image--button'>Get the Recipe</button>
          </Link>
        </section>

        <About />

        <RecipeCategories />

        <Travel />

        <Cookbook />

      </main>
    </Layout>
  }
}

export default Index
