import { Component } from 'react'

import Layout from '../components/Layout'
import SeafoodRecipes from '../components/SeafoodRecipes'

class Seafood extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <SeafoodRecipes />
      </main>
    </Layout>
  }
}

export default Seafood
