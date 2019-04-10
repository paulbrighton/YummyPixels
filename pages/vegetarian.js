import { Component } from 'react'

import Layout from '../components/Layout'
import VegRecipes from '../components/VegRecipes'

class Vegetarian extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <VegRecipes />
      </main>
    </Layout>
  }
}

export default Vegetarian
