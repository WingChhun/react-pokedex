import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { API } from '../../constants';

function LoadingContainer(props) {
  return <div>Loading Map...</div>;
}

function GoogleMap({ locations, google, mapProps }) {
  return (
      <Map google={google} {...mapProps}>
        {locations.length &&
          locations.map((location, i) => {
            const [lat, lng] = location.split(',');

            return (
              <Marker
                key={`lat__${i}`}
                position={{
                  lat,
                  lng
                }}
              />
            );
          })}
      </Map>
  );
}

GoogleMap.propTypes = {
  locations: PropTypes.array.isRequired,
  mapProps: PropTypes.object
};

GoogleMap.defaultProps = {
  locations: []
};

export default GoogleApiWrapper({
  apiKey: API.GOOGLE,
  LoadingContainer: LoadingContainer
})(GoogleMap);
