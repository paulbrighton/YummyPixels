import { Component } from 'react'
import Link from 'next/link'

class Cookbook extends Component {
  render () {
    return <section className='c-cookbook'>
      <div className='c-cookbook__container'>
        <h2>Buy the YummyEats Cookbook</h2>
        <div className='section__divider' />
        <div className='c-cookbook__image'>
          <figure>
            <img src='/static/images/yummyeats.jpg' />
          </figure>
        </div>
        <div className='c-cookbook__text'>
          <h3>Get the book!</h3>
          <p>Want the recipes availbale offline? The YummyEats cookbook is avaiable to buy as a digital download from Amazon or iBooks. Get your copy now!</p>
        </div>
      </div>
    </section>
  }
}

export default Cookbook
