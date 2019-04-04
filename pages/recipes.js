import { Component } from 'react'

import Layout from '../components/Layout'
import RecipeCategories from '../components/RecipeCategories'

class Recipes extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <RecipeCategories />
      </main>
    </Layout>
  }
}

export default Recipes
