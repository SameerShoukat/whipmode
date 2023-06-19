import { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';
import { googleKey } from '../../api/index';

import { message } from 'antd';
import axios from 'axios';
import { api } from '../../api/index';
const options = {
  strokeColor: '#20690e',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: 'RGBA(32,105,14,0.5)',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 50,
  zIndex: 1,
};

const carlist =[
  {
    latitude: 40.0632576,
    longitude : -86.1500564
  },
  {
    latitude: 30.0492308,
    longitude : -95.8595124
  }
]

export const StyleMap = (cordinate) => {

  const [location, setLocation] = useState({})
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
    setLocation(currentPosition);
  };

  const onDragEndMap = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const currentPosition = {
      lat,
      lng,
    };
    setCurrentPosition(currentPosition);
    setLocation(currentPosition);
  };

  
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <LoadScript 
    googleMapsApiKey={googleKey}
    libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition?.lat ? currentPosition : cordinate}
      >
        <MarkerF
          onDragEnd={(e) => onDragEndMap(e)}
          position={currentPosition}
          draggable={true}
        />
        <CircleF
          center={currentPosition?.lat ? currentPosition : cordinate}
          options={options}
        />

        {
          carlist && carlist.length > 0 && carlist.map((location) => (
              <>
                  <CircleF
                    center={{lat: location.latitude , lng: location.longitude}}
                    options={options}
                  />
              </>
              ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default StyleMap;
