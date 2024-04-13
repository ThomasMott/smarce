import PropTypes from 'prop-types';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map({ position }) {
    const OSMPosition = [Number(position[1]), Number(position[0])];

    return (
        <MapContainer center={OSMPosition} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={OSMPosition}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

Map.propTypes = {
    position: PropTypes.array,
};
