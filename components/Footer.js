import { Component } from 'react'
import Link from 'next/link'
import FooterNav from './FooterNav'

class Footer extends Component {
  render () {
    return <footer className='c-footer'>
      <div className='o-main-container'>
        <div className='c-footer__container'>
          <div className='c-footer_navigation'>
            <FooterNav />
            <div className='c-footer__recipe-nav'>
              <ul>
                <li><Link href=''><a>Vegetarian</a></Link></li>
                <li><Link href=''><a>Seafood</a></Link></li>
                <li><Link href=''><a>Poultry</a></Link></li>
                <li><Link href=''><a>Pork</a></Link></li>
                <li><Link href=''><a>Beef</a></Link></li>
                <li><Link href=''><a>Lamb</a></Link></li>
              </ul>
            </div>
          </div>
          <div className='c-footer__brand'>
            <Link href='/'><a><img src='/static/images/yummypixels-logo.png' alt='Yummy Pixels Logo' className='c-footer__brand-logo' /></a></Link>
          </div>
          <div className='c-footer__info'>
            <div className='c-footer__social'>
              <h3>Social Media</h3>
              <li><Link href='https://twitter.com/paulbrighton_'><a>Twitter</a></Link></li>
              <li><Link href='https://www.linkedin.com/in/paulbrighton/'><a>LinkedIn</a></Link></li>
            </div>
            <div className='c-footer__support'>
              <h3>Support Me</h3>
              <li><Link href='https://twitter.com/paulbrighton_'><a>YummyEats Cookboook</a></Link></li>
              <li><Link href='https://www.linkedin.com/in/paulbrighton/'><a>Stock Photography</a></Link></li>
            </div>
            <div className='c-footer__legal'>
              <h3>Boring Stuff</h3>
              <p>Designed by Paul Brighton</p>
              <p>&copy; 2018 Paul Brighton</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  }
}

export default Footer
