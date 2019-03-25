import { Component } from 'react'

import Layout from '../components/Layout'

class Travel extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='o-main-container'>
          <h1>Travel</h1>
        </div>
      </main>
    </Layout>
  }
}

export default Travel
