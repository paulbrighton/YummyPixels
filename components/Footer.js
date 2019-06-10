import { Component } from 'react'
import Link from 'next/link'
import FooterNav from './FooterNav'

class Footer extends Component {
  render () {
    return <footer className='c-footer'>
      <div className='c-footer__container'>
        <div className='c-footer_navigation'>
          <FooterNav />
          <div className='c-footer__recipe-nav'>
            <ul>
              <li><Link href='/vegetarian'><a>Vegetarian</a></Link></li>
              <li><Link href='/seafood'><a>Seafood</a></Link></li>
              <li><Link href='/poultry'><a>Poultry</a></Link></li>
              <li><Link href='/pork'><a>Pork</a></Link></li>
              <li><Link href='/beef'><a>Beef</a></Link></li>
              <li><Link href='lamb'><a>Lamb</a></Link></li>
            </ul>
          </div>
        </div>
        <div className='c-footer__brand'>
          <Link href='/'><a><img src='/static/Images/yummypixels-logo.png' alt='Yummy Pixels Logo' className='c-footer__brand-logo' /></a></Link>
        </div>
        <div className='c-footer__info'>
          <div className='c-footer__social'>
            <h3>Social Media</h3>
            <ul>
              <li><a href='https://twitter.com/paulbrighton_' target='_blank'>Twitter</a></li>
              <li><a href='https://www.linkedin.com/in/paulbrighton/' target='_blank'>LinkedIn</a></li>
            </ul>
          </div>
          <div className='c-footer__support'>
            <h3>Support Me</h3>
            <ul>
              <li><a href='https://itunes.apple.com/gb/book/yummy-eats/id1095148851?mt=11' target='_blank'>YummyEats Cookboook</a></li>
              <li><a href='https://www.shutterstock.com/g/paulbrighton76' target='_blank'>Stock Photography</a></li>
            </ul>
          </div>
          <div className='c-footer__legal'>
            <h3>Boring Stuff</h3>
            <p>Designed by Paul Brighton</p>
            <p>&copy; 2018 Paul Brighton</p>
            <p>Icons by <a href='https://www.flaticon.com/authors/smashicons' title='Smashicons' target='blank'>Smashicons</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  }
}

export default Footer
