import React from 'react';
import Maps from '../components/maps';

export default function Contact() {
  return (
    <section className='hero is-medium sm-hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='is-size-1 sm-center sm-mgb-20'>
            <span className='sm-text-color-primary'>Contact</span>{' '}
            <span className='sm-text-color-tertiary'>Us</span>
          </div>
          <div>
            <p className='is-size-5 has-text-weight-light sm-mgb-20'>
              เลขที่ 9 ซ. รังสิต–นครนายก 57 ถ.รังสิต–นครนายก ต.ประชาธิปัตย์ อ.ธัญบุรี จ.ปทุมธานี
              12130 (ติดกับคลินิกแพทย์สามารถ)
            </p>
            <Maps />
            <hr />
            <div className='columns'>
              <div className='column'>
                <p className='is-size-5 has-text-weight-light sm-mgb-20'>
                  <strong>Information :</strong>
                </p>
                <ul className='is-size-5 has-text-weight-light sm-mgb-20 sm-pdl-20'>
                  <li>061-546-1614</li>
                  <li>
                    <a href='https://www.facebook.com/samarteducarenursery' target='_blank'>
                      Facebook Page
                    </a>
                  </li>
                </ul>
              </div>
              <div className='column'>
                <p className='is-size-5 has-text-weight-light sm-mgb-20'>
                  <strong>Business Hours :</strong>
                </p>
                <ul className='is-size-5 has-text-weight-light sm-mgb-20 sm-pdl-20'>
                  <li>Weekday : 7.00 to 17.00</li>
                  <li>Satturday-Sunday : Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
