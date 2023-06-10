import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const StyleMap = () => {

    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    const onMarkerDragEnd = (e) => {
        console.log(e)
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
      };

      console.log(currentPosition)


    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 24.860966, lng: 66.990501
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
      },[])

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyC9hcW0CMIVc7UwYp9fTKgM8AvUxQnn-TQ'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                 {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDraggableChanged={(e)=>{console.log('this is ruing')}}
            draggable={true} /> :
            null
          }

            </GoogleMap>
        </LoadScript>
    )
}

export default StyleMap;