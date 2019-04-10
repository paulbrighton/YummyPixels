import { Component } from 'react'

import Layout from '../components/Layout'
import PorkRecipes from '../components/PorkRecipes'

class Pork extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <PorkRecipes />
      </main>
    </Layout>
  }
}

export default Pork
