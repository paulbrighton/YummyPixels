import { Component } from 'react'

import Layout from '../components/Layout'
import TravelItineraries from '../components/TravelItineraries'

class Travel extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <TravelItineraries />
      </main>
    </Layout>
  }
}

export default Travel
