import { Component } from 'react'
import Link from 'next/link'

class Cookbook extends Component {
  render () {
    return <div className='c-cookbook'>
      <h2>Buy the YummyEats Cookbook</h2>
      <div className='section__divider' />
      <div className='c-cookbook__image'>
        <figure>
          <img src='/static/images/yummyeats.jpg' />
        </figure>
      </div>
      <p>The YummyEats cookbook is avaiable to buy as a digital download from Amazon or iBooks. Get your copy now!</p>
    </div>
  }
}

export default Cookbook
