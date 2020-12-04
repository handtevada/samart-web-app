import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div className='sm-maps-maker'>
    <img src='/img/pin.svg' alt='maps' width={30} height={30} />;<div>{text}</div>
  </div>
);

export default function Maps() {
  const center = {
    lat: 13.993792,
    lng: 100.654424,
  };

  return (
    // Important! Always set the container height explicitly
    <div className='sm-maps'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCD8NyEE0_6CYSJc9v0Vr00L-XhAxb48ZE' }}
        defaultCenter={center}
        defaultZoom={17}
      >
        <Marker lat={13.993792} lng={100.654424} text='ซ. รังสิต–นครนายก 57 ถ.รังสิต–นครนายก' />
      </GoogleMapReact>
    </div>
  );
}
