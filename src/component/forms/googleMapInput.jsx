
// import React, { useState, useEffect } from "react";
// import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
// import { googleKey } from '../../api';

// const AutoComplete = (props) => {

//     const [searchBox, setSearchBox] = useState(null);

//     const onSBLoad = ref => {
//         setSearchBox(ref);
//     };

//     const handlePlaceChanged = (value) => { 
//         const [ place ] = searchBox.current.getPlaces();       
//         console.log(place); 
//         props.setLocation({address : place.formatted_address, latitude : place.geometry.location.lat(), longitude : place.geometry.location.lng()})        
//     }

//     useEffect(()=>{
//     },[searchBox])

//     return (
//             <LoadScript
//              googleMapsApiKey={googleKey} 
//              libraries={lib}
//              >
//                 <StandaloneSearchBox
//                     onLoad={onSBLoad}
//                     onPlacesChanged={handlePlaceChanged}
//                 >
//                 <input type="text" placeholder='Enter a loation' className='location-input' />
//                 </StandaloneSearchBox>
//             </LoadScript>
//     );
// };

// export default AutoComplete;


/*global google*/
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { googleKey } from '../../api';

import {
  StandaloneSearchBox,
  LoadScript
} from '@react-google-maps/api';
const lib = ['places'];
function AutoComplete({setLocation}) {
  const [searchBox, setSearchBox] = useState(null);
  const onSBLoad = ref => {
    setSearchBox(ref);
  };
    const onPlacesChanged = (value) => { 
        if(searchBox && searchBox.getPlaces()){
            const [place]  = searchBox.getPlaces()    
            setLocation({address : place.formatted_address, latitude : place.geometry.location.lat(), longitude : place.geometry.location.lng()})   
        }
    }
  useEffect(()=>{
  },[searchBox])

  return (
    <LoadScript
      googleMapsApiKey={googleKey}
      libraries={lib}
    >

        {/* Child components, such as markers, info windows, etc. */}
        <>
          <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <input type="text" placeholder='Enter a loation' className='location-input' 
             onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            />
          </StandaloneSearchBox>
        </>
    </LoadScript>
  );
}
export default AutoComplete;