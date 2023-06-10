import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { EnvironmentOutlined } from '@ant-design/icons';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.8607,
  lng: 67.0011
};

function StyleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC9hcW0CMIVc7UwYp9fTKgM8AvUxQnn-TQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* <LocationPin map={EnvironmentOutlined}   /> */}
      </GoogleMap>
  ) : <></>
}

export default React.memo(StyleMap)



// const LocationPin = (props) => (
//   <div className="pin">
//     <EnvironmentOutlined />
//     <p className="pin-text">{props.map}</p>
//   </div>
// )