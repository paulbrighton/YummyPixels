import { Component } from 'react'

import Layout from '../components/Layout'
import Travel from '../components/Travel'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <main className='o-main-container'>
        <h1>YummyPixels - Food & Travel</h1>
        <div className='section__divider' />
        <section>
          <p>Image Slider</p>
        </section>
        <section className='c-travelling'>
          <h2>About</h2>
          <div className='section__divider' />
        </section>
        <section className='c-travelling'>
          <h2>Recipes Categories</h2>
          <div className='section__divider' />
        </section>
        <section className='c-travelling'>
          <h2>Travel</h2>
          <div className='section__divider' />
          <Travel />
        </section>
      </main>
    </Layout>
  }
}

export default Index
