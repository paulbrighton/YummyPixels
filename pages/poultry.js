import { Component } from 'react'

import Layout from '../components/Layout'
import PoultryRecipes from '../components/PoultryRecipes'

class Poultry extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <PoultryRecipes />
      </main>
    </Layout>
  }
}

export default Poultry
