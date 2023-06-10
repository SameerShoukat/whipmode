import { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  CircleF,
} from '@react-google-maps/api';

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

export const StyleMap = ({ setLocation }) => {
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
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 24.860966,
    lng: 66.990501,
  };

  const getSupervisorsLocation = async () => {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('uswms-login')}`,
      },
    };

    await axios
      .get(`${api}/admins/get-supervisors-locations`, {}, config)
      .then((res) => {
        setListOfSupervisors(res.data)
       
      })
      .catch((res) => {
        res && message.error(res.response.data.message);
      });
  };

  useEffect(() => {
    getSupervisorsLocation();
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <LoadScript googleMapsApiKey='AIzaSyC9hcW0CMIVc7UwYp9fTKgM8AvUxQnn-TQ'>
      <GoogleMap
        // onClick={(e) => onClickMap(e)}
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition?.lat ? currentPosition : defaultCenter}
      >
        <MarkerF
          onDragEnd={(e) => onDragEndMap(e)}
          position={currentPosition}
          draggable={true}
        />
        <CircleF
          center={currentPosition?.lat ? currentPosition : defaultCenter}
          options={options}
        />

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
