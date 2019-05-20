import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import BeefRecipes from '../components/BeefRecipes'

class Beef extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Beef Recipe Collection</title>
        <meta
          name='description'
          content='A collection of beef recipes from around the world by Yummy Pixels. Includes Kibbeh, Lomo Saltado and Chinese beef noodles.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <BeefRecipes />
      </main>
    </Layout>
  }
}

export default Beef
