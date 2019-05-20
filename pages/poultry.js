import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import PoultryRecipes from '../components/PoultryRecipes'

class Poultry extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Poultry Recipe Collection</title>
        <meta
          name='description'
          content='A collection of poultry recipes from around the world by Yummy Pixels. Includes Kuwaiti Curried Chicken, Vietnamese Smoked Duck and Thai Green Curry.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <PoultryRecipes />
      </main>
    </Layout>
  }
}

export default Poultry
