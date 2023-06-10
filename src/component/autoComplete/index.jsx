// import React, { useRef } from "react";
// import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
// import InputIcon from '../forms/inputIcon';
// const PlaceComponent = () => {
//     const inputRef = useRef();

//     const handlePlaceChanged = (value) => { 
 
//         const [ place ] = inputRef.current.getPlaces();
//         console.log(value);
//         console.log(place)
        
//         // if(place) { 
//         //     console.log(place.formatted_address)
//         //     console.log(place.geometry.location.lat())
//         //     console.log(place.geometry.location.lng())
//         // } 
//     }

//     return (
//         <LoadScript googleMapsApiKey={'AIzaSyDYmGdrMCYFRZCrrvA_QTid8YB53-HHT_E'} libraries={["places"]}>
//                 <StandaloneSearchBox
//                     onLoad={ref => inputRef.current = ref}
//                     onPlacesChanged={handlePlaceChanged}
//                 >
//                     <Input prefix={icon} placeholder={message} />
//                 </StandaloneSearchBox>
//         </LoadScript>
//     );
// };

// export default PlaceComponent;