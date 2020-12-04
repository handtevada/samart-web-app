import React from 'react';

export default function Card(props) {
  const { img, desc, fixImg } = props;
  const imgClass = fixImg ? 'sm-card-img-fix' : 'sm-card-img';
  return (
    <div className='sm-card'>
      <img src={img} alt={desc} className={imgClass} />
      <p className='is-size-5' style={{ padding: '10px' }}>
        {desc}
      </p>
    </div>
  );
}
