import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='hero is-medium sm-hero sm-home-section-even'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column sm-center'>
              <div>
                <span>
                  <img
                    src='/img/logo.png'
                    alt='logo'
                    height={100}
                    width={100}
                    className='sm-navbar-logo'
                  />
                </span>
                <span className='sm-navbar-logo-text sm-font-logo'>
                  <div className='is-size-5'>SAMART EDU-CARE</div>
                  <div className='is-size-5'>NURSERY.</div>
                </span>
              </div>
              <div className='is-size-5'>©2021 All rights reserved.</div>
              <div>
                Icons made by{' '}
                <a href='http://www.freepik.com/' title='Freepik'>
                  Freepik
                </a>{' '}
                from{' '}
                <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
                </a>
              </div>
            </div>
            <div className='column sm-center'>
              <div className='sm-mgb-10 is-size-3'>Site Maps</div>
              <Link href='/about'>
                <div className='sm-footer-site is-size-5'>About Us</div>
              </Link>
              <Link href='/service'>
                <div className='sm-footer-site is-size-5'>Service</div>
              </Link>
              <Link href='https://facebook.com/samarteducarenursery/offers'>
                <div className='sm-footer-site is-size-5'>Promotion</div>
              </Link>
              <Link href='/careers'>
                <div className='sm-footer-site is-size-5'>Careers</div>
              </Link>
              <Link href='/contact'>
                <div className='sm-footer-site is-size-5'>Contact</div>
              </Link>
            </div>
            <div className='column sm-center'>
              <div>
                <button
                  className='button is-size-5 sm-button-fb sm-footer-social'
                  onClick={() => window.open('https://facebook.com/samarteducarenursery', '_blank')}
                >
                  Facebook
                </button>
              </div>
              <div>
                <button
                  className='button is-size-5 sm-button-fb sm-footer-social'
                  onClick={() => (document.location = 'mailto:samarteducarenursery@gmail.com')}
                >
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
