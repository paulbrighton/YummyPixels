import { Component } from 'react'

import Layout from '../components/Layout'

class Gallery extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main'>
        <div className='o-main-container'>
          <h1>Travel Images</h1>
          <h2>Food Images</h2>
        </div>
      </main>
    </Layout>
  }
}

export default Gallery

