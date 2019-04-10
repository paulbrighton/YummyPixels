import { Component } from 'react'

import Layout from '../components/Layout'
import LambRecipes from '../components/LambRecipes'

class Lamb extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <LambRecipes />
      </main>
    </Layout>
  }
}

export default Lamb
