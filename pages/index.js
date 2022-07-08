import React from 'react';
import Card from '../components/card';
import Gallery from '../components/gallery';
import Maps from '../components/maps';

export default function Home() {
  const [videoWidth, setVideoWidth] = React.useState(560);
  const [videoHeight, setVideoHeight] = React.useState(314);
  const glList = [
    { img: '/img/gallery1.jpg', desc: 'gallery' },
    { img: '/img/gallery2.jpg', desc: 'gallery' },
    { img: '/img/gallery3.jpg', desc: 'gallery' },
    { img: '/img/gallery4.jpg', desc: 'gallery' },
    { img: '/img/gallery5.jpg', desc: 'gallery' },
    { img: '/img/gallery6.jpg', desc: 'gallery' },
    { img: '/img/gallery7.jpg', desc: 'gallery' },
  ];
  const courseList = [
    {
      img: '/img/course1.jpg',
      desc: 'หลักสูตรเตรียมหนูน้อยก่อนไปโรงเรียน 2-4 ปี เสริมสร้างการเรียนรู้และทักษะที่เหมาะสมแก่หนูน้อย',
    },
    {
      img: '/img/course2.jpg',
      desc: 'หลักสูตรดูแลเด็กเล็ก 3 เดือนถึง 2 ปี โดยครูปฐมวัยและนายแพทย์ พร้อมด้วยบุคลากรที่ผ่านการอบรม',
    },
    {
      img: '/img/course4.jpg',
      desc: 'โปรแกรมส่งเสริมกิจกรรมเชิงบวก ละลายพฤติกรรมที่ไม่พึงประสงค์ โดยครูปฐมวัยและนายแพทย์',
    },
  ];
  const highlightList = [
    {
      img: '/img/cctv.svg',
      desc: 'เรามีกล้องวงจรปิด (CCTV) เพื่อความอบอุ่นใจของคุณพ่อคุณแม่',
    },
    {
      img: '/img/brain.svg',
      desc: '“พัฒนาของร่างกาย อารมณ์ จิตใจ สังคมและสติปัญญา” โดยครูปฐมวัย',
    },
    {
      img: '/img/salad.svg',
      desc: 'เรามีการพัฒนาเมนูอาหารจาก นพ.สามารถ จำปี อย่างสม่ำเสมอ',
    },
    {
      img: '/img/bus.svg',
      desc: 'สถานที่เนอร์สเซอรี่เดินทางมาง่าย มีที่จอดรถสะดวก ติดถนน รังสิต-นครนายก',
    },
  ];

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setVideoWidth(260);
      setVideoHeight(146);
    }
    if (window.innerWidth >= 1280) {
      setVideoWidth(760);
      setVideoHeight(426);
    }
  }, []);

  return (
    <>
      <section className='hero is-large sm-hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <div className='is-size-1 sm-right sm-text-color-primary sm-font-logo'>
                  Samart Edu-Care Nursery
                </div>
                <div className='is-size-4 sm-right sm-font-logo'>Rangsit-Nakornnayork-57</div>
                <div className='is-size-3 sm-center sm-mgt-20 sm-text-color-secondary sm-right'>
                  "เลือกเนอสเซอรี่ที่เหมาะกับลูกคุณ เลือกสามารถเอ็ดดูแคร์เนอสเซอรี่"
                </div>
                <div className='is-size-2 sm-right sm-text-color-tertiary sm-font-logo'>
                  061-546-1614
                </div>
                <div className='sm-right sm-mgt-20'>
                  <button
                    className='button is-size-5 sm-button-fb'
                    onClick={() =>
                      window.open('https://facebook.com/samarteducarenursery', '_blank')
                    }
                  >
                    Facebook
                  </button>
                </div>
              </div>
              <div className='column' style={{ textAlign: 'center', transform: 'rotate(-5deg)' }}>
                <img
                  src='/img/hero.gif'
                  alt='samart edu-care nursery'
                  width={500}
                  height={300}
                  className='sm-img-hero'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-large sm-hero sm-home-section-even'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              {courseList.map((item, index) => {
                return (
                  <div key={index} className='column sm-center'>
                    <Card key={index} img={item.img} desc={item.desc} fixImg={false} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-large sm-hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              {highlightList.map((item, index) => {
                return (
                  <div key={index} className='column sm-center'>
                    <Card key={index} img={item.img} desc={item.desc} fixImg={true} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-medium sm-hero sm-home-section-even'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <img
                  src='/img/certificate.jpg'
                  alt='Certificate'
                  width={500}
                  height={300}
                  className='sm-img-hero'
                />
              </div>
              <div className='column'>
                <div className='is-size-1 sm-left sm-text-color-primary sm-font-logo'>
                  Certificate
                </div>
                <div className='is-size-3 sm-center sm-mgt-20 sm-text-color-secondary sm-left'>
                  กิจกรรมด้านเศรษฐกิจและการดำเนินชีวิต หมวด ก
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-medium sm-hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='sm-center is-size-1 sm-text-color-primary sm-font-logo'>
              Security CCTV
            </div>
            <div className='sm-center'>
              <iframe
                src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fsamarteducarenursery%2Fvideos%2F2070428239837605%2F&show_text=false&width=560'
                scrolling='no'
                width={videoWidth}
                height={videoHeight}
                frameBorder='0'
                style={{ borderRadius: '15px' }}
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-medium sm-hero sm-home-section-even'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              {glList.map((item, index) => {
                return (
                  <div key={index} className='column sm-center'>
                    <Gallery key={index} img={item.img} desc={item.desc} />
                  </div>
                );
              })}
            </div>
            <div className='sm-center'>
              <button
                className='button is-size-3 sm-button-fb'
                onClick={() =>
                  window.open(
                    'https://facebook.com/samarteducarenursery/photos/?ref=page_internal',
                    '_blank'
                  )
                }
              >
                ดูรูปเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-medium sm-hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='sm-center is-size-1 sm-text-color-primary sm-font-logo'>Maps</div>

            <div className='sm-center'>
              <Maps />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
