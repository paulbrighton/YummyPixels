import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import PorkRecipes from '../components/PorkRecipes'

class Pork extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Pork Recipe Collection</title>
        <meta
          name='description'
          content='A collection of pork recipes from around the world by Yummy Pixels. Includes Thai Jungle Curry, Lu Rou Fan and Spicy Szechuan Mapo Tofu'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <PorkRecipes />
      </main>
    </Layout>
  }
}

export default Pork
