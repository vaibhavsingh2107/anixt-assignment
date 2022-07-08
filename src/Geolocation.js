import React from "react";
import { useGeolocated } from "react-geolocated";
import './Geolocation.css'
const Geolocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td><strong>Latitude:</strong></td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td><strong>Longitude:</strong></td>
                    <td>{coords.longitude}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Geolocation;