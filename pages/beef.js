import { Component } from 'react'

import Layout from '../components/Layout'
import BeefRecipes from '../components/BeefRecipes'

class Beef extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <BeefRecipes />
      </main>
    </Layout>
  }
}

export default Beef
