import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const toggleStyles = () => {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

  const menuList = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Us' },
    { href: '/service', name: 'Services' },
    { href: 'https://facebook.com/samarteducarenursery/offers', name: 'Promotion' },
    { href: '/careers', name: 'Careers' },
    { href: '/contact', name: 'Contact' },
  ];

  return (
    <div className='sm-navbar-container'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link href='/'>
            <a>
              <div className='sm-nav-brand'>
                <img
                  src='/img/logo.png'
                  alt='logo'
                  height={50}
                  width={50}
                  className='sm-navbar-logo'
                />
                <div className='sm-navbar-logo-text sm-font-logo'>
                  <div>SAMART EDU-CARE</div>
                  <div>NURSERY.</div>
                </div>
              </div>
            </a>
          </Link>
          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasic'
            onClick={toggleStyles}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div id='navbarBasic' className='navbar-menu'>
          <div className='navbar-end'>
            {menuList.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <a key={index} className='navbar-item is-size-5' onClick={toggleStyles}>
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
