import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import SeafoodRecipes from '../components/SeafoodRecipes'

class Seafood extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Seafood Recipe Collection</title>
        <meta
          name='description'
          content='A collection of seafood recipes from around the world by Yummy Pixels. Includes Fish Tacos, Brazilian Prawn Curry and Ackee and Saltfish.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <SeafoodRecipes />
      </main>
    </Layout>
  }
}

export default Seafood
