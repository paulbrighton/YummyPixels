import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import LambRecipes from '../components/LambRecipes'

class Lamb extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Yummy Pixels - Lamb Recipe Collection</title>
        <meta
          name='description'
          content='A collection of lamb recipes from around the world by Yummy Pixels. Includes Mutton Chapp, Indian Mutton Curry and Seekh Kebabs.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <LambRecipes />
      </main>
    </Layout>
  }
}

export default Lamb
