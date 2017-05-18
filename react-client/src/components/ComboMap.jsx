import React from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";

const ComboMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={13} center={{lat: 37.7749, lng: -122.42}} >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default ComboMap;



