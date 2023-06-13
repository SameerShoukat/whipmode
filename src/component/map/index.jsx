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
  radius: 1000,
  zIndex: 1,
};

export const StyleMap = (cordinate) => {
  const [location, setLocation] = useState({})
  const [currentPosition, setCurrentPosition] = useState({});
  const [listOfSupervisors, setListOfSupervisors] = useState([]);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
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
        {
          listOfSupervisors.length > 0 && (<>
            {listOfSupervisors.map(({location}) => {
              return (<>
                  <CircleF
          center={{lat:location.coordinates[1] , lng:location.coordinates[0]}}
          options={options}
        />
              </>)
            })}
          </>)
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default StyleMap;
