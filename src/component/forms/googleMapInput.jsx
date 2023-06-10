import {Form, Input } from 'antd';
import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const AutoComplete = ({name, icon, message, type}) => {
    const inputRef = useRef();

    const handlePlaceChanged = (value) => { 
 
        const [ place ] = inputRef.current.getPlaces();
        console.log(value);
        console.log(place)
        
        // if(place) { 
        //     console.log(place.formatted_address)
        //     console.log(place.geometry.location.lat())
        //     console.log(place.geometry.location.lng())
        // } 
    }

    return (
        <LoadScript googleMapsApiKey={'AIzaSyDYmGdrMCYFRZCrrvA_QTid8YB53-HHT_E'} libraries={["places"]}>
                    <Form.Item
            name={name}
            className='custom-input'
            rules={[
                {
                    required: true,
                    type : type,
                    message: message,
                },
            ]}
            getValueFromEvent={handlePlaceChanged}
            getValueProps={(i) => ({value: i})}
        >
               <StandaloneSearchBox
                    onLoad={ref => inputRef.current = ref}
                    // onPlacesChanged={handlePlaceChanged}
                >
                    <Input prefix={icon} placeholder={message} />
                </StandaloneSearchBox>
        </Form.Item>
            
        </LoadScript>
    );
};

export default AutoComplete;