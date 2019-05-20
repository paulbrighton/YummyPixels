import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import TravelItineraries from '../components/TravelItineraries'

class Travel extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Travel itinerary selection page by Yummy Pixels</title>
        <meta
          name='description'
          content='A collection of short travel itineraries that include Japan, South Korea, China, Hong Kong and Myanmar travelling by plane, train and bus.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <TravelItineraries />
      </main>
    </Layout>
  }
}

export default Travel
