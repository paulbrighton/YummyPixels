import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import RecipeCategories from '../components/RecipeCategories'

class Recipes extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Recipe Category Selection Page on Yummy Pixels</title>
        <meta
          name='description'
          content='Category selection page for the recipes on Yummy Pixels. The selection includes beef, lamb, poultry, vegetarian, pork and seafood.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <RecipeCategories />
      </main>
    </Layout>
  }
}

export default Recipes
