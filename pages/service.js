import React from 'react';

const ContentFirst = (index) => {
  return (
    <div key={index}>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        <strong>หลักสูตรการสอน :</strong>
      </p>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        <strong>Samart Edu-Care Nursery </strong>คือเนอสเซอรี่ที่รับดูแล และพัฒนาทักษะเด็กก่อนเรียน
        (1-4 ปี) และเด็กเล็ก 3 เดือนขึ้นไป เปิดให้บริการครบวงจร ตั้งแต่วันจันทร์ – ศุกร์ เต็มวัน
        ครึ่งวัน รายวัน รายชั่วโมง ตามความต้องการของแต่ละครอบครัว
      </p>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        ที่สามารถเอ็ดดูแคร์เนอร์สเซอรี่เรามุ่งทำให้ที่นี่เปรียบเสมือนบ้านหลังที่สองที่ให้ความรัก
        ความอบอุ่น พร้อมเสริมสร้างพัฒนาการที่เหมาะสมตามวัยทุกๆวัน{' '}
        <strong>“เก่งฉลาด ดึงศักยภาพ สู่อัจฉริยะ” </strong>
        ด้วยการเล่นอย่างมีความหมาย ภายใต้การดูแลด้านสุขภาพอนามัย ความปลอดภัย และโภชนาการที่ถูกต้อง
        โดย นพ. สามารถ จำปี
      </p>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        การดูแลและส่งเสริมพัฒนาการด้วยสื่อที่เป็นรูปธรรม โดย คุณครูเอกปฐมวัย คุรุศาสตร์บัณฑิต
        โดยใช้แผนการเรียนรู้และเสริมพัฒนาการที่เน้นเด็กเป็นศูนย์กลาง
        โดยส่งเสริมให้เด็กมีพัฒนาการทั้งด้านร่างกาย อารมณ์ จิตใจ และสติปัญญาแบบองค์รวม
        ทั้งยังได้นำหลักสูตรการพัฒนาเด็กจากออสเตรเลียมาผสมผสาน
        เพื่อให้เด็กคุ้นเคยกับทั้งภาษาอังกฤษและภาษาไทยเพื่อจะได้นำไปใช้เมื่อเรียนชั้นสูงต่อไป
      </p>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        นอกจากนี้เรายังมุ่งเน้นในการพัฒนาเด็ก โดยการจัดกิจกรรมการเรียนรู้บนพื้นฐานของความรัก
        การให้กำลังใจ การเสริมแรงในทางบวก เพื่อให้เกิดการเรียนรู้อย่างมีสมาธิ มีความสุขในการรับรู้
        ได้รับการพัฒนาทั้งร่างกายสมองซีกซ้าย สมองซีกขวา ประสาทสัมผัส จิตใต้สำนึก จิตเหนือสำนึก
        ควบคู่ไปกับการได้รับการพัฒนาจิต ปัญญา และการเรียนรู้อย่างสนุกสนานและมีความสุข
      </p>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        <strong>อัตราส่วนผู้ดูแลต่อเด็ก :</strong>
      </p>
      <ul className='is-size-5 has-text-weight-light sm-mgb-20 sm-pdl-20'>
        <li>- 1 ต่อ 3 สำหรับเด็ก 6 เดือน – 1 ปี</li>
        <li>- 1 ต่อ 5 สำหรับเด็ก 1 ปี – 3 ปี</li>
        <li>- 1 ต่อ 10 สำหรับเด็ก 3 ปี – 6 ปี</li>
      </ul>
      <p className='is-size-5 has-text-weight-light sm-mgb-20'>
        <strong>เวลาทำการ :</strong>
      </p>
      <ul className='is-size-5 has-text-weight-light sm-mgb-20 sm-pdl-20'>
        <li>- สามารถเอ็ดดูแคร์เนอร์สเซอรี่ เปิดตั้งแต่ 07.00 – 17.00 น.</li>
        <li>- หยุดวันเสาร์ – อาทิตย์</li>
      </ul>
    </div>
  );
};

const ContentSecond = (index) => {
  const scheduleList = [
    { time: '7.00 – 8.00', activeity: 'รับเด็ก / ตรวจสุขภาพ (free play)' },
    { time: '8.00 – 8.30', activeity: 'เคารพธงชาติ / ออกกำลังกาย (respect flag/exercise)' },
    { time: '8.30 – 9.00', activeity: 'อาหารว่าง (เช้า)/ดื่มนม (snack)' },
    { time: '9.00 – 9.30', activeity: 'ฝึกเข้าห้องน้ำ (potty training)' },
    { time: '9.30 – 9.45', activeity: 'สนทนาปฏิทิน สภาพอากาศ (calendar & weather)' },
    { time: '9.45 – 10.00', activeity: 'โยคะประกอบเสียงเพลงบรรเลง (yoga)' },
    {
      time: '10.00 – 10.30',
      activeity:
        'กิจกรรมวงกลมบูรณาการ (Learning circle time) กิจกรรมเคลื่อนไหวและจังหวะ (song & rhyme) กิจกรรมเสริมประสบการณ์ (Letter/Number Shape/Color) กิจกรรมศิลปะสร้างสรรค์ (Art time)',
    },
    { time: '10.30 – 11.00', activeity: 'เล่นเสรีตามมุม (free play)' },
    { time: '11.00 – 11.30', activeity: 'ดื่มนม & ฝึกเข้าห้องน้ำ (potty training)' },
    { time: '11.30 – 12.00', activeity: 'เล่นสนาม (playground)' },
    { time: '12.00 – 12.30', activeity: 'อาหารกลางวัน (lunch)' },
    { time: '12.30 – 12.45', activeity: 'ฟังนิทานก่อนนอน (story time)' },
    { time: '12.45 – 14.45', activeity: 'สวดมนต์ / นั่งสมาธิ /นอนกลางวัน (nap time)' },
    { time: '14.45 – 15.15', activeity: 'เข้าห้องน้ำ / อาบน้ำแต่งตัว (clean up time)' },
    { time: '15.15 – 15.45', activeity: 'อาหารว่าง (บ่าย) (snack)' },
    {
      time: '15.45 – 16.15',
      activeity: 'กิจกรรมเกมการศึกษา /เล่นเสรี (special activity / table toys / dough)',
    },
    { time: '16.15 – 17.00', activeity: 'เล่นสนาม (playground/free play)(เตรียมตัวกลับบ้าน )' },
  ];
  return (
    <div key={index}>
      <table className='table is-size-5'>
        <thead>
          <tr>
            <th className='is-size-4' style={{ width: '30%' }}>
              เวลา
            </th>
            <th className='is-size-4' style={{ width: '70%' }}>
              กิจกรรม
            </th>
          </tr>
        </thead>
        <tbody>
          {scheduleList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.activeity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='is-size-5'>* หมายเหตุ : เวลาสามารถยืดหยุ่นได้ตามความเหมาะสม</div>
    </div>
  );
};

const ContentThird = (index) => {
  return (
    <div index={index} className='sm-center'>
      <img src='/img/cover.jpg' alt='cover' style={{ borderRadius: '10px' }} />
      <button
        className='button is-size-5 sm-button-fb sm-footer-social'
        onClick={() => window.open('https://facebook.com/samarteducarenursery/photos', '_blank')}
      >
        Gallery on Facebook
      </button>
    </div>
  );
};

export default function Service() {
  const subMenuListInit = [
    { id: 1, name: 'หลักสูตรการสอน', active: true, content: ContentFirst },
    { id: 2, name: 'ตารางกิจกรรม', active: false, content: ContentSecond },
    { id: 3, name: 'คลังรูปภาพ', active: false, content: ContentThird },
  ];

  const [subMenuList, setSubMenuList] = React.useState(subMenuListInit);

  const onChangeView = (id) => {
    const _subMenuList = subMenuList.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });

    setSubMenuList(_subMenuList);
  };

  return (
    <section className='hero is-medium sm-hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='is-size-1 sm-center sm-mgb-20'>
            <span className='sm-text-color-primary'>Services</span>
          </div>
          <div className='columns'>
            <div className='column is-one-quarter'>
              {subMenuList.map((item, index) => {
                const localClass = item.active
                  ? 'sm-sub-menu is-size-4 sm-sub-menu-active'
                  : 'sm-sub-menu is-size-4';
                return (
                  <div key={index} className={localClass} onClick={() => onChangeView(item.id)}>
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div className='column'>
              {subMenuList
                .filter((item) => item.active)
                .map((item, index) => {
                  return item.content(index);
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
