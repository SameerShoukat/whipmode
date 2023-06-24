import { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  Marker
} from '@react-google-maps/api';
import { googleKey } from '../../api/index';
import carImage from '../../assets/images/car-image.png'

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


export const StyleMap = ({cordinate, existCarList}) => {

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
            mapContainerClassName='vehicle-map'
          >
            <MarkerF
              onDragEnd={(e) => onDragEndMap(e)}
              position={currentPosition}
              draggable={true}
            />
            {
              existCarList && existCarList.length > 0 && existCarList.map((location) => (
                  <>
                      <Marker
                        position={{lat: location.location.coordinates[0] , lng: location.location.coordinates[1]}}
                        icon={carImage}
                      >
                        <img src={carImage} alt="car-image"  />  
                      </Marker>
                  </>
                  ))}
          </GoogleMap>
        </LoadScript>
  
  );
};

export default StyleMap;
