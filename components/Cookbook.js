import { Component } from 'react'

class Cookbook extends Component {
  render () {
    return <section className='c-cookbook'>
      <div className='c-cookbook__container'>
        <h2>YummyEats Cookbook</h2>
        <div className='section__divider' />
        <div className='c-cookbook__image'>
          <a href='https://www.amazon.co.uk/dp/B01DFPXFEY' target='blank'>
            <figure>
              <img src='/static/Images/yummyeats.jpg' alt='Yummy Eats cookbook cover' />
            </figure>
          </a>
        </div>
        <div className='c-cookbook__text'>
          <h3>Get the book!</h3>
          <p>Want the recipes availbale offline? The YummyEats cookbook is avaiable to buy as a digital download from <a href='https://www.amazon.co.uk/dp/B01DFPXFEY' target='blank' className='c-portfolio-project__link'>Amazon</a> or <a href='https://itunes.apple.com/gb/book/yummy-eats/id1095148851?mt=11' target='blank' className='c-portfolio-project__link'>iBooks</a>. Get your copy now!</p>
        </div>
      </div>
    </section>
  }
}

export default Cookbook
