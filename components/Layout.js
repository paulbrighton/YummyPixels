import { Component } from 'react'

import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../build/scss/application.scss'

class Layout extends Component {
  render () {
    return <div className='container'>
      <Head>
        <title>YummyPixels - Food and Travel Blog</title>
        <meta name='description' content='A blog by Paul Brighton all about food and travel. A collection of articles and recipes inspired by travelling the world.' key='viewport' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/static/Images/favicon/favicon-32x32.png' type='image/x-icon' />
      </Head>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
