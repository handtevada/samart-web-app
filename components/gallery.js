import React from 'react';

export default function Gallery(props) {
  const { img, desc } = props;
  return <img src={img} alt={desc} className='sm-img-hero sm-gallery-img' />;
}
