import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import VegRecipes from '../components/VegRecipes'

class Vegetarian extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Vegetarian Recipe Collection</title>
        <meta
          name='description'
          content='A collection of vegetarian recipes from around the world by Yummy Pixels. Includes Falafel, Green Papaya Salad and Tabbouleh.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <VegRecipes />
      </main>
    </Layout>
  }
}

export default Vegetarian
