import { Component } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

class Stock extends Component {
  render () {
    return <Layout {...this.props}>
      <Head>
        <title>Stock Photography - Gallery Page by Yummy Pixels</title>
        <meta
          name='description'
          content='A gallery of food, travel and cat photos all available to buy and use in your own projects from Paul Brighton at Shutterstock.'
          key='viewport'
        />
      </Head>
      <main className='o-main'>
        <div className='c-stock-photography'>
          <div className='c-stock-photography__container'>
            <section className='c-stock-photography__header'>
              <h1>Stock Photography</h1>
              <div className='section__divider' />
              <div className='c-stock-photography__image'>
                <figure>
                  <picture>
                    <source media='(max-width: 768px)' srcSet='static/Images/gallery/beef-shawarma.jpg' />
                    <img src='static/Images/gallery/beef-shawarma-hero.jpg' alt='Seekh kebabs on skewers' />
                  </picture>
                </figure>
              </div>
              <p className='c-stock-photography__description-text'>I have over 3400 images that are available to buy from my <a href='https://www.shutterstock.com/g/paulbrighton76'>Shutterstock portfolio</a>. Below are a collection of my favourites that include food (obviously), travel and some cat images. Click on an image below to buy and use one of my photos.</p>
            </section>
            <section>
              <Gallery />
            </section>
          </div>
        </div>
      </main>
    </Layout>
  }
}

export default Stock
